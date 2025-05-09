import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointmentForm!: FormGroup;
  doctors = [
    { id: '1', name: 'Dr. Smith' },
    { id: '2', name: 'Dr. Patel' },
    { id: '3', name: 'Dr. Williams' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      doctor: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  submitAppointment(): void {
    if (this.appointmentForm.valid) {
      console.log('Appointment Data:', this.appointmentForm.value);
      alert('Appointment booked successfully!');
      this.appointmentForm.reset();
    }
  }
}
