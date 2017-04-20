import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Login } from 'app/models/login';
import { HttpUtilServiceMongoDB } from 'app/util/http-util-mongoDB-service';

@Injectable()
export class LoginService {

	private loginUrl = 'Users/login';
	private logoutUrl = '';

	constructor(private http: Http, private httpUtil: HttpUtilServiceMongoDB) {
	}

	logar(usuario:string, senha:string): Observable<Login> {
		let params = JSON.stringify(
			{ 'username': usuario, 'password': senha });
		
		return this.http.post(this.httpUtil.url(this.loginUrl), params, 
						this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
	}

	sair() {
		delete localStorage['token'];
	}

	logado() {
		return localStorage['token'];
	}
}