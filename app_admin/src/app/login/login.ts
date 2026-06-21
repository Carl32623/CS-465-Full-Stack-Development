import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from "@angular/forms"; 
import { Router } from '@angular/router'; 
import { AuthenticationService } from '../services/authentication'; 
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  public formError: string = ''; 
  submitted = false;

  credentials = {
    email: '',
    password: ''
  }

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {

  }

  public onLoginSubmit() : void {
    this.formError = '';
    if(!this.credentials.email || !this.credentials.password) {
      this.formError = 'Email and password are required, please try again';
    } else {
      this.doLogin();
    }
  }

  private doLogin() : void {
    let newUser = {
      name: '',
      email: this.credentials.email
    } as User;

    console.log('LoginComponent::doLogin');
    console.log(this.credentials);

    this.authenticationService.login(newUser, this.credentials.password).subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error: (error: any) => {
        console.log('Error: ', error);
        this.formError = error.status === 401
          ? 'Invalid email or password'
          : 'Login failed, please make sure the API server is running';
      }
    });
  }

  
}
