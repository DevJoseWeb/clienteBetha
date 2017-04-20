import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response, URLSearchParams, Jsonp  } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HttpUtilPostgreSQL } from 'app/util/http-util-postgreSQL-service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { User } from 'app/models/user';

@Injectable()
export class UsersService {

  private path = 'users';
  private pathput = '';

  constructor(private http: Http, private jsonp: Jsonp, private httpUtil: HttpUtilPostgreSQL) { }

  getUsers() {
    return this.http.get(this.httpUtil.urlUserListar()).map(res => res.json());
  }
  getUser(id) {
    return this.http.get(this.getUserUrl(id)).map(res => res.json());
  }
 	addUser(user: User): Observable<User> {
		let params = JSON.stringify(user);
    	return this.http.post(this.httpUtil.url(this.path), params,
    					this.httpUtil.headers())
      				.map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErrosUserAdd);
	}
  updateUser(user: User) {
		let params = JSON.stringify(user);
    	return this.http.put(this.httpUtil.urlUserPut(this.pathput + user.id), params,
    					this.httpUtil.headers())
      				.map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErrosUserUpdate);
	}
  
  buscarPorId(id: number): Observable<User> {
		return this.http.get(this.httpUtil.urlUserBuscarId( '/' + id),
						this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErrosUserBuscarId);
	}
 
  deleteUser(user) {
    return this.http.delete(this.getUserUrl(user.id)).map(res => res.json());
  }

  public getUserUrl(id) {
    return this.httpUtil.urllistar + '/' + id;
  }

  private getUserUrlput(id) {
     return this.httpUtil.urlUserPut + '/' + id;
   }
    getUsersk() {
    return this.http.get(this.httpUtil.urlListarTodos()).map(res => res.json());
  }
}
