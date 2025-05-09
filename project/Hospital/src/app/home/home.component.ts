import { Component } from '@angular/core';
import { AppointmentComponent } from '../appointment/appointment.component';
import { DoctorsComponent } from '../doctors/doctors.component'; // if you're also using app-doctors

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AppointmentComponent, DoctorsComponent], // ✅ Include standalone components used in the template
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
