import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//MÓDULOS DE CLIENTES
import { PessoasComponent } from './pessoas/pessoas.component';
import { pessoasRouting } from './pessoas/pessoas.routing';
import { PessoasModule } from './pessoas/pessoas.module';
//MÓDULOS DE PEDIDOS
import { PedidosComponent } from './pedidos/pedidos.component';
import { pedidosRouting } from './pedidos/pedidos.routing';
import { PedidosModule } from './pedidos/pedidos.module';
//MÓDULOS DE PRODUTOS
import { ProdutosComponent } from './produtos/produtos.component';
import { produtosRouting } from './produtos/produtos.routing';
import { ProdutosModule } from './produtos/produtos.module';
//MÓDULOS DE USERS
import { UsersComponent } from './users/users.component';
import { usersRouting } from './users/users.routing';
import { UsersModule } from './users/users.module';
//MÓDULOS DE DIVERSOS
import { MaterializeModule } from 'angular2-materialize';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    PessoasModule,
    pessoasRouting,
    PedidosModule,
    pedidosRouting,
    ProdutosModule,
    produtosRouting,
    UsersModule,
    usersRouting,
    routing,
    JsonpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
