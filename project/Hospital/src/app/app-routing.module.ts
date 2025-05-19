import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { SpecialitiesComponent } from './specialities/specialities.component';
import { LocationsComponent } from './locations/locations.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: 'feedback', component: FeedbackComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-conditions', component: TermsConditionsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'specialities', component: SpecialitiesComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'book-appointment', component: BookAppointmentComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
