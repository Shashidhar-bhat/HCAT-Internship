import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  selectedLanguage: string = 'en';

  changeLanguage(event: any) {
    const lang = event.target.value;

    console.log("Selected Language:", lang);
  }
}
