import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-appointment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent {
  loading = false;
  isDarkMode = localStorage.getItem('darkMode') === 'true';

  onSubmit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      alert('Appointment booked successfully!');
    }, 2000);
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString());
  }
}
