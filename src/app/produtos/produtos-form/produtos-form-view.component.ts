import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Produtos } from 'app/models/produtos';
import { ProdutosService } from 'app/services/produtos.service';
import { BasicValidators } from 'app/util/basic-validators';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form-view.component.html',
  styleUrls: ['./produtos-form-view.component.css']
})

export class ProdutosFormViewComponent implements OnInit {
  form: FormGroup;
  produtos: Produtos = new Produtos();

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
      status: ['', []],
    });
  }

  ngOnInit() {
    let idpessoa = this.route.params.subscribe(params => {
    let idpessoa = params['idpessoa'];
       if (!idpessoa)
        return;

      this.produtosService.getProdutosid(idpessoa)
        .subscribe(produtos => this.produtos = produtos,response => {
            if (response.status === 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }

  save() {
    let result,
        produtosValue = this.form.value;

    if (produtosValue.idpessoa) {
   //   result = this.produtosService.updateProdutos(produtosValue);
    } else {
     // result = this.produtosService.addPesspas(produtosValue);
    }

    result.subscribe(data => this.router.navigate(['produtos']));
  }
}