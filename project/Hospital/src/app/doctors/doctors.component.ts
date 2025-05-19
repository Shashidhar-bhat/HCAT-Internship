import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
  imports: [CommonModule]
})
export class DoctorsComponent {
  doctors = [
    {
      name: 'Dr. Aisha Verma',
      speciality: 'Pediatrician',
      qualification: 'MBBS, MD (Pediatrics)',
      experience: '8 years',
      image: 'https://randomuser.me/api/portraits/women/21.jpg'
    },
    {
      name: 'Dr. Neel Mehra',
      speciality: 'Dermatologist',
      qualification: 'MBBS, MD (Dermatology)',
      experience: '10 years',
      image: 'https://randomuser.me/api/portraits/men/45.jpg'
    },
    {
      name: 'Dr. Rina Thomas',
      speciality: 'Gynecologist',
      qualification: 'MBBS, MS (OBG)',
      experience: '12 years',
      image: 'https://randomuser.me/api/portraits/women/34.jpg'
    },
    {
      name: 'Dr. Kabir Singh',
      speciality: 'Pulmonologist',
      qualification: 'MBBS, MD (Pulmonary Medicine)',
      experience: '9 years',
      image: 'https://randomuser.me/api/portraits/men/56.jpg'
    }
  ];
}
