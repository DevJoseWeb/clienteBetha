import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Pessoas } from 'app/models/pessoas';
import { PessoasService } from 'app/services/pessoas.service';
import { BasicValidators } from 'app/util/basic-validators';

@Component({
  selector: 'app-pessoas-form',
  templateUrl: './pessoas-form-cad.component.html',
  styleUrls: ['./pessoas-form-cad.component.css']
})
export class PessoasFormCadComponent implements OnInit {

  form: FormGroup;
  pessoas: Pessoas = new Pessoas();
  title: string;

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

      this.pessoasService.getPessoasid(idpessoa).subscribe
          (pessoas => this.pessoas = pessoas, response => {
            if (response.status === 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }
}
