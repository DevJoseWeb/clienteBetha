import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ProdutosService } from 'app/services/produtos.service';
import { HttpUtilPostgreSQL } from 'app/util/http-util-postgreSQL-service';

import { ProdutosFormListaComponent } from './produtos-form/produtos-form-lista.component';
import { ProdutosFormViewComponent } from './produtos-form/produtos-form-view.component';
import { ProdutosFormCadComponent } from './produtos-form/produtos-form-cad.component';
import { ProdutosFormEditarComponent } from './produtos-form/produtos-form-editar.component';
import { ProdutosComponent } from './produtos.component';

@NgModule({
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, RouterModule, HttpModule ],
  declarations: [ ProdutosComponent, ProdutosFormListaComponent, ProdutosFormViewComponent,
  ProdutosFormEditarComponent, ProdutosFormCadComponent ],
  exports: [ ProdutosComponent ],
  providers: [ ProdutosService, HttpUtilPostgreSQL ]
})
export class ProdutosModule { }
