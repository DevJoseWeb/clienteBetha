import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response, URLSearchParams, Jsonp  } from '@angular/http';
import { Pedidos } from 'app/models/pedidos';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { HttpUtilPostgreSQL } from 'app/util/http-util-postgreSQL-service';

@Injectable()
export class PedidosService {

   private pedidos: any[];
   private path = 'pedidos';

 constructor(private http: Http, private jsonp: Jsonp, private httpUtil: HttpUtilPostgreSQL) { }
//1
 getPedidos() {
    return this.http.get(this.httpUtil.urlPedidosListarPedidos()).map(res => res.json());
  }
//2
 getPedidosid(idpessoa) {
    return this.http.get(this.getPessoaUrl(idpessoa)).map(res => res.json());
 }
//3
addPedidos(pessoas) {
     return this.http.post(this.httpUtil.urlUserPost(), JSON.stringify(pessoas)).map(res => res.json());
   }
//4
 updatePedidos(pessoas) {
    return this.http.put(this.getPessoaUrl(pessoas.idpessoa), JSON.stringify(pessoas)).map(res => res.json());
  }
 //5 
 deletePessoa(idpessoa) {
    return this.http.delete(this.getPessoaUrl(idpessoa)).map(res => res.json());
  }
  //6
visualizarLeitor(idpessoa) {
    return this.http.get(this.getPessoaUrl(idpessoa)).map(res => res.json());
  }

 buscarPorId(idpessoa: number): Observable<Pedidos> {
 		return this.http.get(this.httpUtil.urlbuscarPorId(idpessoa),
 						this.httpUtil.headers())
 	                .map(this.httpUtil.extrairDados)
 	                .catch(this.httpUtil.processarErros);
 	}
   private getPessoaUrl(idpessoa) {
    return this.httpUtil.urllistarPessoa + '/' + idpessoa;
  }
}
