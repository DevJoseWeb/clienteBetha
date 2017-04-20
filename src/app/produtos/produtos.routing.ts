import { Routes, RouterModule } from '@angular/router';

import { ProdutosComponent } from './produtos.component';
import { ProdutosFormListaComponent } from './produtos-form/produtos-form-lista.component';
import { ProdutosFormEditarComponent } from './produtos-form/produtos-form-editar.component';
import { ProdutosFormCadComponent } from './produtos-form/produtos-form-cad.component';

import { HomeComponent } from '../home/home.component';

const produtosRoutes: Routes = [
  { path: 'produtos', component: ProdutosComponent, pathMatch: 'full' },//caminho full
  { path: 'produtos/lista', component: ProdutosFormListaComponent},//listar
  { path: 'produtos/novo', component: ProdutosFormCadComponent },//novo
  //{ path: 'produtos/:idpedidos', component: ProdutosFormEditarComponent },// pega id
  { path: 'produtos/editar/:idpedidos', component: ProdutosFormEditarComponent }//editar
];
export const produtosRouting = RouterModule.forChild(produtosRoutes);
