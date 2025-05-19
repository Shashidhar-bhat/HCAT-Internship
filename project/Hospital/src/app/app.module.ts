import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SpecialitiesComponent } from './specialities/specialities.component';
import { LocationsComponent } from './locations/locations.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    PrivacyPolicyComponent,
    TermsConditionsComponent,
    AboutUsComponent,


    ContactUsComponent,
    BookAppointmentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LocationsComponent,
    SpecialitiesComponent,
    FeedbackComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
