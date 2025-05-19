import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  standalone: false,
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  contact = {
    name: '',
    email: '',
    phone: '',
    department: '',
    appointmentDate: '',
    message: '',
    contactMethod: '',
    terms: false
  };

  onSubmit() {
    if (this.contact.name && this.contact.email && this.contact.phone && this.contact.department && this.contact.message && this.contact.terms) {
      console.log('Form Submitted!', this.contact);
      alert('Thank you for contacting us! We will get back to you soon.');
    } else {
      console.log('Form is invalid');
    }
  }
}
