import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Pedidos } from 'app/models/pedidos';
import { PedidosService } from 'app/services/pedidos.service';
import { BasicValidators } from 'app/util/basic-validators';

@Component({
  selector: 'app-pedidos-form-cad',
  templateUrl: './pedidos-form-editar.component.html',
  styleUrls: ['./pedidos-form-editar.component.css']
})
export class PedidosFormCadComponent implements OnInit {

  form: FormGroup;
  pedidos: Pedidos = new Pedidos();
  title: string;

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private pedidosService: PedidosService
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

      this.pedidosService.getPedidosid(idpessoa).subscribe
          (pedidos => this.pedidos = pedidos, response => {
            if (response.status === 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }
}