import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    RouterModule
  ]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  role: 'patient' | 'doctor' = 'patient';
  errorMessage: string = '';

  setRole(role: 'patient' | 'doctor') {
    this.role = role;
  }

  onLogin(event: Event) {
    event.preventDefault();

    if (!this.email || !this.password) {
      this.errorMessage = 'Email and password are required.';
      return;
    }


    if (this.email === 'test@example.com' && this.password === '123') {
      console.log(`Successfully logged in as ${this.role}`);
      this.errorMessage = '';

    } else {
      this.errorMessage = 'Invalid email or password.';
    }
  }
}
