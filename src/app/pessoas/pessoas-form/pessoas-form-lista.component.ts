import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { Router, ActivatedRoute } from '@angular/router';
import { Pessoas } from 'app/models/pessoas';
import { PessoasService } from 'app/services/pessoas.service';
//import { BasicValidators } from 'app/util/basic-validators';

@Component({
  selector: 'app-pessoas-form',
  templateUrl: './pessoas-form-lista.component.html',
  styleUrls: ['./pessoas-form-lista.component.css']
})

export class PessoasFormListaComponent implements OnInit {

  public pessoass: Pessoas[] = [];

  constructor(private pessoasService: PessoasService) { }

  ngOnInit() {
    this.pessoasService.getPessoas().subscribe(data => this.pessoass = data);
  }
    deletePessoas(pessoas){
    if (confirm('Are you sure you want to delete ' + pessoas.nome + '?')) {
      var index = this.pessoass.indexOf(pessoas);
      this.pessoass.splice(index, 1);

      this.pessoasService.deletePessoa(pessoas.idpessoa)
        .subscribe(null,
          err => {
            alert('Could not delete user.');
            // Revert the view back to its original state
            this.pessoass.splice(index, 0, pessoas);
          });
    }
  }
}
