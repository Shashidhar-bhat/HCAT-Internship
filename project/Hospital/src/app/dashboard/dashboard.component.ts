// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { faHome, faCalendarCheck, faPrescription, faFileMedical, faCog, faPlus, faSignOutAlt, faCalendarDay, faPrescriptionBottleAlt, faHeartbeat } from '@fortawesome/free-solid-svg-icons';

// @Component({
//   selector: 'app-patient-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css'],
//   standalone: true,
//   imports: [FontAwesomeModule]
// })
// export class PatientDashboardComponent {
//   // Icons
//   icons = {
//     home: faHome,
//     calendar: faCalendarCheck,
//     prescription: faPrescription,
//     records: faFileMedical,
//     settings: faCog,
//     plus: faPlus,
//     logout: faSignOutAlt,
//     calendarDay: faCalendarDay,
//     prescriptionBottle: faPrescriptionBottleAlt,
//     heartbeat: faHeartbeat
//   };

//   // Sample data
//   patientName = "John Doe";
//   patientId = "PAT789456";
//   appointments = [
//     { doctor: "Smith", date: "2023-06-15", time: "10:00 AM", purpose: "Regular Checkup" },
//     { doctor: "Johnson", date: "2023-06-20", time: "2:30 PM", purpose: "Follow-up" }
//   ];
//   prescriptions = [
//     { medication: "Metformin", dosage: "500mg twice daily", refills: 2 },
//     { medication: "Lisinopril", dosage: "10mg daily", refills: 1 }
//   ];
//   bloodPressure = "120/80 mmHg";
//   glucoseLevel = "98 mg/dL";
//   weight = 75;

//   constructor(private router: Router) {}

//   bookAppointment() {
//     this.router.navigate(['/patient/appointments/book']);
//   }

//   logout() {
//     // Implement logout logic
//     this.router.navigate(['/login']);
//   }
// }
