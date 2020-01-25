import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxViacepService } from '@brunoc/ngx-viacep';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private viacep: NgxViacepService
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
    console.log(this.form.value);
  }

  getInformation(){
    this.viacep.buscarPorCep(this.form.get('cep').value).then( ( endereco ) => {
      // Endereço retornado :)

      this.form.patchValue(endereco);
      console.log(endereco);

     }).catch( (error) => {
      // Alguma coisa deu errado :/
      console.log(error.message);
     });
  }

}
