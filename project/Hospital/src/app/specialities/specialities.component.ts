import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-specialities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.css']
})
export class SpecialitiesComponent {
  specialties = [
    {
      icon: 'https://ui-avatars.com/api/?name=Cardiology&background=FF6F61&color=fff&rounded=true&size=64',
      name: 'Cardiology',
      description: 'Heart care and cardiovascular treatments'
    },
    {
      icon: 'https://ui-avatars.com/api/?name=Neurology&background=6A67CE&color=fff&rounded=true&size=64',
      name: 'Neurology',
      description: 'Brain and nervous system specialists'
    },
    {
      icon: 'https://ui-avatars.com/api/?name=Orthopedics&background=2A9D8F&color=fff&rounded=true&size=64',
      name: 'Orthopedics',
      description: 'Bone and joint care experts'
    },
    {
      icon: 'https://ui-avatars.com/api/?name=Pediatrics&background=F4A261&color=fff&rounded=true&size=64',
      name: 'Pediatrics',
      description: 'Child healthcare services'
    },
    {
      icon: 'https://ui-avatars.com/api/?name=Genetics&background=E76F51&color=fff&rounded=true&size=64',
      name: 'Genetics',
      description: 'Genetic disorder diagnosis and treatment'
    }
  ];
}
