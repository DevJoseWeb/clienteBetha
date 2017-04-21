import { Component, OnInit } from '@angular/core';
import {PessoasService} from 'app/services/pessoas.service';
import {Pessoas} from 'app/models/pessoas';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  public pessoas: Pessoas[] = [];
  constructor(private pessoasService: PessoasService) { }

  ngOnInit() {
    this.pessoasService.getPessoas().subscribe(data => this.pessoas = data);
  }

//  deleteLeitor(leitor) {
//       let index = this.leitores.indexOf(leitor);
//       this.leitores.splice(index, 1);
//       this.leitoresService.deleteLeitor(leitor.id)
//         .subscribe(null,
//           err => {
//             alert('Não é possível deletar !');
//             this.leitores.splice(index, 0, leitor);
//           });
//     }
   }
