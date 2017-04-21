import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { PessoasService } from 'app/services/pessoas.service';
import { HttpUtilPostgreSQL } from 'app/util/http-util-postgreSQL-service';

import { PessoasFormListaComponent } from './pessoas-form/pessoas-form-lista.component';
import { PessoasFormViewComponent } from './pessoas-form/pessoas-form-view.component';
import { PessoasFormEditarComponent } from './pessoas-form/pessoas-form-editar.component';
import { PessoasFormCadComponent } from './pessoas-form/pessoas-form-cad.component';
import { PessoasComponent } from './pessoas.component';

@NgModule({
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, RouterModule, HttpModule ],
  declarations: [ PessoasComponent, PessoasFormListaComponent, PessoasFormViewComponent,
  PessoasFormEditarComponent, PessoasFormCadComponent],

   exports: [ PessoasComponent, PessoasFormListaComponent, PessoasFormViewComponent,
   PessoasFormEditarComponent, PessoasFormCadComponent],

  providers: [ PessoasService, HttpUtilPostgreSQL ]
})
export class PessoasModule { }
