import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response, URLSearchParams, Jsonp  } from '@angular/http';
import { Produtos } from 'app/models/produtos';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { HttpUtilPostgreSQL } from 'app/util/http-util-postgreSQL-service';

@Injectable()
export class ProdutosService {
  private produtos: any[];
  private path = 'produtos';

  constructor(private http: Http, private jsonp: Jsonp, private httpUtil: HttpUtilPostgreSQL) { }

    initData() {
      // todo metodo data
   }

  private getProdutoUrlp(id) {
    return this.httpUtil.urlbuscarPorId  + id;
  }

  getAllProdutos() {
    if (this.produtos) {
      return Observable.of(this.produtos);
    } else {
      return this.http.get(this.httpUtil.urlListarp())
        .map((res: Response) => res.json().results)
        .do((data) => { this.produtos = data; })
        .catch(this.httpUtil.processarErros);
    }
  }
 deleteProdutos(id) {
    return this.http.delete(this.getProdutoUrlp(id)).map(res => res.json());
  }
 getProdutos() {
    return this.http.get(this.httpUtil.urlListarp()).map(res => res.json());
  }

 getProdutosid(id) {
    return this.http.get(this.getProdutoUrlp(id)).map(res => res.json());
  }

 /*
  private getPessoaUrl(id) {
    return this.httpUtil.urlbuscarPorId + '/' + id;
  }

  addLeitor(leitor: Leitor) {
		let params = JSON.stringify(leitor);
   	return this.http.post(this.httpUtil.urlCriar(this.path), params, 
    					this.httpUtil.headers())
      				.map(this.httpUtil.extrairDados)
              .catch(this.httpUtil.processarErrosMac);
	}

  deleteLeitor(id) {
    return this.http.delete(this.getLeitorUrl(id)).map(res => res.json());
  }

  buscarPorId(id: number): Observable<Leitor> {
		return this.http.get(this.httpUtil.urlbuscarPorId(id), 
						this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
	}
  
  updateLeitor(leitor: Leitor) {
		let params = JSON.stringify(leitor);
    return this.http.put(this.httpUtil.urlAtualizar(), params,this.httpUtil.headers())
                .map(this.httpUtil.extrairDados)
                .catch(this.httpUtil.processarErros);
	}
  buscarPorMac(mac: string): Observable<Leitor> {
     return this.http.get(this.httpUtil.urlbuscarPorIdUnidade(this.path + mac),
            this.httpUtil.headers())
                 .map(this.httpUtil.extrairDados)
                 .catch(this.httpUtil.processarErros);
	}

 	buscarPorIdunidade(unidade: number): Observable<Leitor> {
     return this.http.get(this.httpUtil.urlbuscarPorIdUnidade(this.path + unidade),
            this.httpUtil.headers())
                 .map(this.httpUtil.extrairDados)
                 .catch(this.httpUtil.processarErros);
	}

  buscarPorIdunidadeSESA(): Observable<Leitor> {
     return this.http.get(this.httpUtil.urlbuscarPorIdUnidade(this.path),
            this.httpUtil.headers())
                  .map(this.httpUtil.extrairDados)
                  .catch(this.httpUtil.processarErros);
	}

  getAllLeitor() {
    if (this.leitores) {
      return Observable.of(this.leitores);
    } else {
      return this.http.get(this.httpUtil.urlListarTodos())
        .map((res: Response) => res.json().results)
        .do((data) => { this.leitores = data; })
        .catch(this.httpUtil.processarErros);
    }
  }

   getAllLeitorSESA() {
    return this.http.get(this.httpUtil.urlbuscarPorIdUnidadeSESA()).map(res => res.json());
  }
	
  getLeitores() {
    return this.http.get(this.httpUtil.urlListarTodos()).map(res => res.json());
  }

  getLeitor(id) {
    return this.http.get(this.getLeitorUrl(id)).map(res => res.json());
  }
  */
}
