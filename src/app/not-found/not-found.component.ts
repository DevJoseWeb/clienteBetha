import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  constructor() { }
 
  ngOnInit() {
      // this.produtosService.getProdutos()
      // .catch(this.httpUtil.processarErrosUserBuscarId)
      // .subscribe(data => this.produtoss = data);
      swal({
        imageUrl: 'con.jpg',
        confirmButtonText: 'Não Esperar',
        confirmButtonColor: '#d33',
        title: 'Ocorreu um erro na conexão.. !',
        text: 'Aguarde 10 segundos, tentando conectar ao servidor remoto',
        timer: 9000,
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
  }

}
