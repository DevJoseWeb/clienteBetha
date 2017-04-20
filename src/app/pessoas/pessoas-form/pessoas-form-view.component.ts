import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Pessoas } from 'app/models/pessoas';
import { PessoasService } from 'app/services/pessoas.service';
import { BasicValidators } from 'app/util/basic-validators';

@Component({
  selector: 'app-pessoas-form',
  templateUrl: './pessoas-form-view.component.html',
  styleUrls: ['./pessoas-form-view.component.css']
})

export class PessoasFormViewComponent implements OnInit {
  form: FormGroup;
  pessoas: Pessoas = new Pessoas();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private pessoasService: PessoasService
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

      this.pessoasService.getPessoasid(idpessoa)
        .subscribe(pessoas => this.pessoas = pessoas,response => {
            if (response.status === 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }

  save() {
    let result,
        pessoasValue = this.form.value;

    if (pessoasValue.idpessoa) {
   //   result = this.pessoasService.updatePessoas(pessoasValue);
    } else {
     // result = this.pessoasService.addPesspas(pessoasValue);
    }

    result.subscribe(data => this.router.navigate(['pessoas']));
  }
}