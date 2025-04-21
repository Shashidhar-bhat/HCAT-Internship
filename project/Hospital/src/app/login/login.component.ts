import { Component } from '@angular/core';
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
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    RouterModule
  ]
})
export class LoginComponent {
  role: 'patient' | 'doctor' = 'patient';

  setRole(role: 'patient' | 'doctor') {
    this.role = role;
  }

  onLogin(event: Event) {
    event.preventDefault();
    console.log(`Logging in as ${this.role}`);
    // Add your login logic here
  }
}
