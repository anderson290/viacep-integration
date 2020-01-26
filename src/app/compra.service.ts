import { Injectable } from '@angular/core';

import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  url = environment.url;

  constructor(
    private http: HttpClient
  ) { }


  async getCompras(){
    return await this.http.get(this.url + 'compras');
  }

  atualizaCompras(id, params){
    return this.http.put(this.url + `compras/${id}`, params);
  }

  criarCompras(params){
    return this.http.post(this.url + `compras/create`, params);
  }

  deletarCompra(id){
    return this.http.delete(this.url + `compras/delete/${id}`);
  }







}
