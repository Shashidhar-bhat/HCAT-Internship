import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class SignupComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  accountType: string = '';

  constructor(private router: Router) {}

  onSignup(event: Event) {
    event.preventDefault();

    if (!this.validateForm()) {
      return;
    }

    // In a real app, you would call your authentication service here
    console.log('Signup data:', {
      email: this.email,
      password: this.password,
      accountType: this.accountType
    });

    // Show success message and redirect
    alert('Account created successfully!');
    this.router.navigate(['/login']);
  }

  validateForm(): boolean {
    if (!this.email || !this.password || !this.confirmPassword || !this.accountType) {
      alert('All fields are required');
      return false;
    }

    if (!this.isValidEmail(this.email)) {
      alert('Please enter a valid email address');
      return false;
    }

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return false;
    }

    if (this.password.length < 8) {
      alert('Password must be at least 8 characters');
      return false;
    }

    return true;
  }

  isValidEmail(email: string): boolean {
    // Basic email validation regex
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  }
}
