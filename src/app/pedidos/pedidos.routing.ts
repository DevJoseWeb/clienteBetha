import { Routes, RouterModule } from '@angular/router';

import { PedidosComponent } from './pedidos.component';
import { PedidosFormListaComponent } from './pedidos-form/pedidos-form-lista.component';
import { PedidosFormEditarComponent } from './pedidos-form/pedidos-form-editar.component';
import { PedidosFormCadComponent } from './pedidos-form/pedidos-form-cad.component';
import { PedidosFormViewComponent } from './pedidos-form/pedidos-form-view.component';

import { HomeComponent } from '../home/home.component';

const pedidosRoutes: Routes = [
  { path: 'pedidos', component: PedidosComponent, pathMatch: 'full' },
  { path: 'pedidos/lista', component: PedidosFormListaComponent},
  { path: 'pedidos/novo', component: PedidosFormCadComponent },
  //{ path: 'pedidos/:idpedidos', component: PedidosFormEditComponent }// pega id
  { path: 'pedidos/editar/:idpedidos', component: PedidosFormEditarComponent },
  { path: 'pedidos/visualizar/:idpedidos', component: PedidosFormViewComponent }
];
export const pedidosRouting = RouterModule.forChild(pedidosRoutes);
