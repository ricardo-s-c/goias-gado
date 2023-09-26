import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/components/services/user.service';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  registrationForm: FormGroup;
  registrationError: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // endereco: this.formBuilder.group({
      //   rua: [''],
      //   cep: [''],
      //   numero: [''],
      //   complemento: [''],
      //   bairro: [''],
      //   cidade: [''],
      //   estado: [''],
      //   telefone: [''],
      // }),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.registrationForm.valid) {
      const userData = this.registrationForm.value;

      this.userService
        .createUser(userData)
        .pipe(
          tap(() => {
            console.log('Registro bem-sucedido');
            this.router.navigate(['/']); 
          }),
          catchError((error) => {
            this.registrationError = 'Erro no registro. Tente novamente.';
            return throwError(() => error);
          })
        )
        .subscribe();
    }
  }
}