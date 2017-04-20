import { Routes, RouterModule } from '@angular/router';

import { PessoasComponent } from './pessoas.component';
import { PessoasFormListaComponent } from './pessoas-form/pessoas-form-lista.component';
import { PessoasFormEditarComponent } from './pessoas-form/pessoas-form-editar.component';
import { PessoasFormCadComponent } from './pessoas-form/pessoas-form-cad.component';
import { PessoasFormViewComponent } from './pessoas-form/pessoas-form-view.component';

import { HomeComponent } from '../home/home.component';

const pessoasRoutes: Routes = [
  { path: 'pessoas', component: PessoasComponent, pathMatch: 'full' },
  { path: 'pessoas/lista', component: PessoasFormListaComponent},
  { path: 'pessoas/novo', component: PessoasFormCadComponent },
  //{ path: 'pessoas/:idprodutos', component: LeitorFormadComponent }// pega id
  { path: 'pessoas/editar/:idpessoa', component: PessoasFormEditarComponent },
  { path: 'pessoas/visualizar/:idpessoa', component: PessoasFormViewComponent }
];
export const pessoasRouting = RouterModule.forChild(pessoasRoutes);
