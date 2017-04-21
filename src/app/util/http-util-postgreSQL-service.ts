import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Routes, RouterModule } from '@angular/router';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class HttpUtilPostgreSQL {

	public API_URL: string = 'http://localhost:8080/pessoas/';
	public API_URLid: string = 'http://localhost:8080/pessoas/pedidos';
	public urllistarPessoa = 'http://localhost:8080/pessoas/';

	public API_URLp: string = 'http://localhost:8080/produtos/';
	public API_URLpid: string = 'http://localhost:8080/produtos/';

	public urllistar = 'http://localhost:8080/users';
	public urlpost = 'http://localhost:8080/users/cadastrar/';
	public urlput: string = 'http://localhost:8080/users/editar/';
	public urlbuscarid: string = 'http://localhost:8080/users';

	public urllistarPedidos = 'http://localhost:8080/pedidos/todosPedidos/';

  public urlVwPedidosNome = 'http://localhost:8080/vwpedidos/buscar/';
  public urlView = 'http://localhost:8080/vwpedidos/';

  urlViewPedNome () {
    return this.urlVwPedidosNome;
  }
	urlUserListar() {
		return this.urllistar;
	}
	urlPessoaListarPessoa() {
		return this.urllistarPessoa;
	}
	urlPedidosListarPedidos() {
		return this.urllistarPedidos;
	}
	urlListarTodos() {
		return this.urllistar;
	}
	url(path: string) {
		return this.urlpost;
	}

	// private API_URL: string = 'http://localhost:3000/api/';
	// url(path: string) {
	// 	return this.API_URL + path;
	// }

	urlUserPut(path: string) {
		return this.urlput + path;
}

	urlUserListarid() {
		return this.urllistar;
	}

	urlUserBuscarId(path: string) {
		return this.urlbuscarid + path;
	}
	urlUserPost() {
		return this.urlpost;
	}
	urlListar() {
		return this.API_URL;
	}
	urlbuscarPorId(idpessoa: any) {
		return this.API_URLid + idpessoa;
	}
	urlListarp() {
		return this.API_URLp;
	}
	 headers() {//application/json;charset=UTF-8
	 	let headersParams = { 'Content-Type': 'application/json;charset=UTF-8' };
	 	let headers = new Headers(headersParams);
	 	let options = new RequestOptions({ headers: headers });
	 	return options;
	 }
	extrairDados(response: Response) {
		let data = response.json();
		return data || {};
	}

	processarErros(erro: any) {
		return Observable.throw(alert('Erro acessando servidor remoto, Serviço HTTP'));
	}
	processarErrosUserAdd(erro: any) {
		return Observable.throw(alert('Erro acessando servidor remoto, Serviço de Cadastro de Usuário fora do AR'));
	}
	processarErrosUserUpdate(erro: any) {
		return Observable.throw(alert('Erro acessando servidor remoto, Serviço de Atualização de Usuário fora do AR'));
	}
	processarErrosUserBuscarId(erro: any) {
		return Observable.throw(alert('Erro acessando servidor remoto, Serviço de Busca de Usuário fora do AR'));
	}
	processarErrosPessoaBuscarId(erro: any) {
		return Observable.throw(alert('Erro acessando servidor remoto, Serviço de Busca de Cliente fora do AR'));
	}
	processarErrosCpf(erro: any) {
		return Observable.throw(alert('Erro acessando servidor remoto, CPF já cadastrado'));
	}
}
