import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Pedidos } from 'app/models/pedidos';
import { PedidosService } from 'app/services/pedidos.service';
import { BasicValidators } from 'app/util/basic-validators';

@Component({
  selector: 'app-pedidos-form',
  templateUrl: './pedidos-form-view.component.html',
  styleUrls: ['./pedidos-form-view.component.css']
})

export class PedidosFormViewComponent implements OnInit {
  form: FormGroup;
  pedidos: Pedidos = new Pedidos();

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
      status: ['', []],
    });
  }

  ngOnInit() {
    let idpessoa = this.route.params.subscribe(params => {
    let idpessoa = params['idpessoa'];
       if (!idpessoa)
        return;

      this.pedidosService.getPedidosid(idpessoa)
        .subscribe(pedidos => this.pedidos = pedidos,response => {
            if (response.status === 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }

  save() {
    let result,
        pedidosValue = this.form.value;

    if (pedidosValue.idpessoa) {
   //   result = this.pedidosService.updatePedidos(pedidosValue);
    } else {
     // result = this.pedidosService.addPesspas(pedidosValue);
    }

    result.subscribe(data => this.router.navigate(['pedidos']));
  }
}