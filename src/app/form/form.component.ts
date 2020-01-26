import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxViacepService } from '@brunoc/ngx-viacep';
import { CompraService } from '../compra.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private viacep: NgxViacepService,
    private comprasService: CompraService
  ) { }

  ngOnInit() {
    this.loadForm();
  }

  loadForm(){
    this.form = this.formBuilder.group({
      cep: [null, Validators.required],
      logradouro: [null, Validators.nullValidator],
      uf: [null, Validators.nullValidator],
      localidade: [null, Validators.nullValidator],
    });
  }

  sendData(){
    console.log(this.form.valid);
  }

  create(){
     let x = this.comprasService.criarCompras(this.form.value);
     console.log('resposta', x);
  }

  getInformation(){
    this.viacep.buscarPorCep(this.form.get('cep').value).then( ( endereco ) => {
      // Endereço retornado :)

      console.log(endereco);
      this.form.patchValue(endereco);

     }).catch( (error) => {
      // Alguma coisa deu errado :/
      console.log(error.message);
     });
  }

}
