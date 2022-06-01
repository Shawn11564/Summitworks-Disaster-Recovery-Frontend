import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isSuccessful = !!this.tokenStorage.getToken();
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void { }

  onSubmit(): void {
    this.authService.register(this.form).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;

        this.login(this.form);
      }, err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    )
  }

  private login(credentials: any): void {
    this.authService.login(credentials).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);

        this.goToHome();
      }, err => {
        this.errorMessage = err.error.message;
      }
    );
  }

  goToHome(): void {
    window.location.href = "/"
  }

}
