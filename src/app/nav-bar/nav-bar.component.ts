import { Component, OnInit } from '@angular/core';
import { RequestOptions, Headers, Http, Response, URLSearchParams, Jsonp  } from '@angular/http';
import { PessoasService } from 'app/services/pessoas.service';
import { Pessoas } from 'app/models/pessoas';
import { UsersService } from 'app/services/users.service';
import { User } from 'app/models/user';
import { HttpUtilPostgreSQL } from 'app/util/http-util-postgreSQL-service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public pessoass: Pessoas[] = [];
  public userss: User[] = [];

  constructor(public pessoasService: PessoasService,
  public usersService: UsersService,
  public httpUtil: HttpUtilPostgreSQL,
  public http: Http) { }

  ngOnInit() {
    this.pessoasService.getPessoas().catch(this.httpUtil.processarErrosUserBuscarId)
    .subscribe(data => this.pessoass = data);
    this.usersService.getUsers().catch(this.httpUtil.processarErrosUserBuscarId)
    .subscribe(data => this.userss = data)
    ;
  }
}

