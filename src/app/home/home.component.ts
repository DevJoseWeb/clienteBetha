import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Produtos } from 'app/models/produtos';
import { ProdutosService } from 'app/services/produtos.service';
import swal from 'sweetalert2';
import { HttpUtilPostgreSQL } from 'app/util/http-util-postgreSQL-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public produtoss: Produtos[] = [];
  constructor(private produtosService: ProdutosService,  private httpUtil: HttpUtilPostgreSQL) { }
 ngOnInit() {
       this.produtosService.getProdutos()
       .catch(this.httpUtil.processarErrosUserBuscarId)
       .subscribe(data => this.produtoss = data);
    swal({
      imageUrl: 'logo.jpg',
      title: 'Bem Vindo !',
      text: "Gostaria de ser redirecionado para lista de produtos ?",
      //type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim Comprar !',
      cancelButtonText: "Não !",
      showLoaderOnConfirm: true
    }).then(function () {
      swal({
        confirmButtonText: 'Cancelar ?',
        confirmButtonColor: '#d33',
        title: 'Conectando ao servidor !',
        text: 'Aguarde 2 segundos..',
        timer: 2000,
        showLoaderOnConfirm: true,
        type: 'success'
      }).then(
        function () {
          swal(
            "Não foi carregado tudo !", " ", "success"
            )
        },
        function (dismiss) {
          if (dismiss === 'timer') {
            console.log('Contador de tempo');
          }
        }
      )
    })
  }
}