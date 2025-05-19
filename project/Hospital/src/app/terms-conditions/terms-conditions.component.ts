import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-conditions',
  standalone: false,
  templateUrl: './terms-conditions.component.html',
  styleUrl: './terms-conditions.component.css'
})
export class TermsConditionsComponent {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
