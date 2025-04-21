import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  // // Patient routes
  // {
  //   path: 'patient',
  //   component: PatientDashboardComponent,
  //   canActivate: [AuthGuard, RoleGuard],
  //   data: { role: 'patient' },
  //   children: [
  //     { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  //     { path: 'dashboard', component: PatientDashboardComponent },
  //     { path: 'appointments', loadChildren: () => import('./patient/appointments/appointments.module').then(m => m.AppointmentsModule) },
  //     { path: 'prescriptions', loadChildren: () => import('./patient/prescriptions/prescriptions.module').then(m => m.PrescriptionsModule) },
  //     { path: 'medical-records', loadChildren: () => import('./patient/medical-records/medical-records.module').then(m => m.MedicalRecordsModule) }
  //   ]
  // },

  // Doctor routes
  // {
  //   path: 'doctor',
  //   component: DoctorDashboardComponent,
  //   canActivate: [AuthGuard, RoleGuard],
  //   data: { role: 'doctor' },
  //   children: [
  //     { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  //     { path: 'dashboard', component: DoctorDashboardComponent },
  //     { path: 'appointments', loadChildren: () => import('./doctor/appointments/appointments.module').then(m => m.AppointmentsModule) },
  //     { path: 'patients', loadChildren: () => import('./doctor/patients/patients.module').then(m => m.PatientsModule) },
  //     { path: 'prescribe', loadChildren: () => import('./doctor/prescribe/prescribe.module').then(m => m.PrescribeModule) }
  //   ]
  // },

  // Fallback route
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
