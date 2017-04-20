import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Produtos } from 'app/models/produtos';
import { ProdutosService } from 'app/services/produtos.service';
import { BasicValidators } from 'app/util/basic-validators';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form-lista.component.html',
  styleUrls: ['./produtos-form-lista.component.css']
})

export class ProdutosFormListaComponent implements OnInit {

  public produtoss: Produtos[] = [];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.produtosService.getProdutos().subscribe(data => this.produtoss = data);
  }
}
