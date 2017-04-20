import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Pedidos } from 'app/models/pedidos';
import { Produtos } from 'app/models/produtos';
import { PedidosService } from 'app/services/pedidos.service';
import { ProdutosService } from 'app/services/produtos.service';
import { BasicValidators } from 'app/util/basic-validators';

@Component({
  selector: 'app-pedidos-form',
  templateUrl: './pedidos-form-lista.component.html',
  styleUrls: ['./pedidos-form-lista.component.css']
})

export class PedidosFormListaComponent implements OnInit {

  public pedidoss: Pedidos[] = [];
  public produtoss: Produtos[] = [];

  constructor(private pedidosService: PedidosService, private produtosService: ProdutosService ) { }

  ngOnInit() {
    this.pedidosService.getPedidos().subscribe(data => this.pedidoss = data);
    this.produtosService.getProdutos().subscribe(data => this.produtoss = data);
  }
    deletePedidos(pedidos) {
    if (confirm('Are you sure you want to delete ' + pedidos.nome + '?')) {
      var index = this.pedidoss.indexOf(pedidos);
      this.pedidoss.splice(index, 1);

      this.pedidosService.deletePessoa(pedidos.idpessoa)
        .subscribe(null,
          err => {
            alert('Could not delete user.');
            // Revert the view back to its original state
            this.pedidoss.splice(index, 0, pedidos);
          });
    }
  }
}
