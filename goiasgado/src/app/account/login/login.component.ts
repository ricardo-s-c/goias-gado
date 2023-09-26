import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/components/services/user.service';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ToggleService } from 'src/app/components/services/toggle.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  showButton = true; 
  loginForm: FormGroup;
  loginError: string = '';
  registrationMode: boolean = false;

  constructor(
    private toggleService: ToggleService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  toggleButton() {
    this.toggleService.toggleButton();
  }
  ngOnInit(): void {}

  toggleRegistrationMode() {
    this.registrationMode = !this.registrationMode;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      if (this.registrationMode) {
        this.router.navigate(['/create-account']);
      } else {
        const username = this.loginForm.value.username;
        const password = this.loginForm.value.password;

        this.userService
          .login(username, password)
          .pipe(
            tap((response) => {
              console.log('Login bem-sucedido');
              this.router.navigate(['/']);
              this.toggleButton()
            }),
            catchError((error) => {
              this.loginError = 'Email ou senha inválido!';
              return throwError(() => error);
            })
          )
          .subscribe();
      }
    }
  }
}