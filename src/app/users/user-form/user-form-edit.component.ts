import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from 'app/models/user';
import { UsersService } from 'app/services/users.service';
import { BasicValidators } from 'app/util/basic-validators';

@Component({
  selector: 'app-user-form-edit',
  templateUrl: './user-form-edit.component.html',
  styleUrls: ['./user-form-edit.component.css']
})
export class UserFormEditComponent implements OnInit {
  form: FormGroup;
  title: string;
  user: User = new User();
  private id: number;

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {
    this.form = formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      email: ['', [
        Validators.required,
        BasicValidators.email
        //Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]],
      phone: []
    });
  }

  // ngOnInit() {
  //   let id = this.route.params.subscribe(params => {
  //     let id = params['id'];

  //     this.title = id ? 'Editar User' : 'Novo User';

  //     if (!id)
  //       return;

  //     this.usersService.getUser(id)
  //       .subscribe(
  //         user => this.user = user,
  //         response => {
  //           if (response.status === 404) {
  //             this.router.navigate(['NotFound']);
  //           }
  //         });
  //   });
  // }
  	ngOnInit() {
		this.id = +this.route.snapshot.params['id'];
		this.user = new User();
		this.usersService.buscarPorId(this.id).subscribe(
                	user => this.user = user);
	}

	update() {
		this.usersService.updateUser(this.user).subscribe(
                	user => this.router.navigate(['/users']));
	}
}
