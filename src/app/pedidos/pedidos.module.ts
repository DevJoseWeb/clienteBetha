import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { PedidosService } from 'app/services/pedidos.service';
import { HttpUtilPostgreSQL } from 'app/util/http-util-postgreSQL-service';

import { PedidosFormListaComponent } from './pedidos-form/pedidos-form-lista.component';
import { PedidosFormViewComponent } from './pedidos-form/pedidos-form-view.component';
import { PedidosFormCadComponent } from './pedidos-form/pedidos-form-cad.component';
import { PedidosFormEditarComponent } from './pedidos-form/pedidos-form-editar.component';
import { PedidosComponent } from './pedidos.component';

@NgModule({
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, RouterModule, HttpModule ],
  declarations: [ PedidosComponent, PedidosFormListaComponent, PedidosFormViewComponent,
  PedidosFormEditarComponent, PedidosFormCadComponent],
  exports: [ PedidosComponent ],
  providers: [ PedidosService, HttpUtilPostgreSQL ]
})
export class PedidosModule { }
