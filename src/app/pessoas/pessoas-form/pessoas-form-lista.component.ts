import { Component, OnInit } from '@angular/core';
import {PessoasService} from 'app/services/pessoas.service';
import {Pessoas} from 'app/models/pessoas';

@Component({
  selector: 'app-pessoas-form-lista',
  templateUrl: './pessoas-form-lista.component.html',
  styleUrls: ['./pessoas-form-lista.component.css']
})

export class PessoasFormListaComponent implements OnInit {

  public pessoas: Pessoas[] = [];

  constructor(private pessoasService: PessoasService) { }

  ngOnInit() {
    this.pessoasService.getPessoas().subscribe(data => this.pessoas = data);
  }
}
