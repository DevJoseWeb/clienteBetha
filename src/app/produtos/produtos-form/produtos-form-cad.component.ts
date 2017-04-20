import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Produtos } from 'app/models/produtos';
import { ProdutosService } from 'app/services/produtos.service';
import { BasicValidators } from 'app/util/basic-validators';

@Component({
  selector: 'app-produtos-form-cad',
  templateUrl: './produtos-form-editar.component.html',
  styleUrls: ['./produtos-form-editar.component.css']
})
export class ProdutosFormCadComponent implements OnInit {

  form: FormGroup;
  produtos: Produtos = new Produtos();
  title: string;

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private produtosService: ProdutosService
  ) {

    this.form = formBuilder.group({
      nome: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      cpf: ['', [
        Validators.required,
        Validators.minLength(12)
      ]],
      datacadastro: ['', [
        Validators.required,
        Validators.minLength(8)
      ]],
      email: ['', [
        Validators.required,
        BasicValidators.email
      ]],
      telefone: ['', [
        Validators.required,
        Validators.minLength(1)
      ]],
      status: []
    });
  }

  ngOnInit() {

    let idpessoa = this.route.params.subscribe(params => { let idpessoa = params['idpessoa'];
       this.title = idpessoa ? 'Editar Usuário' : 'Novo Usuário';
       if (!idpessoa)
        return;

      this.produtosService.getProdutosid(idpessoa).subscribe
          (produtos => this.produtos = produtos, response => {
            if (response.status === 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }
}