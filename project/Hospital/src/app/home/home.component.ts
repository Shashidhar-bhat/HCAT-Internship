import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  specialties = [
    {
      name: 'Cardiology',
      description: 'Comprehensive heart care with advanced diagnostics',
      icon: 'https://img.icons8.com/ios-filled/50/000000/heart-with-pulse.png'
    },
    {
      name: 'Neurology',
      description: 'Expert care for brain and nervous system disorders',
      icon: 'https://img.icons8.com/ios-filled/50/000000/brain.png'
    },
    {
      name: 'Orthopedics',
      description: 'Specialized treatment for bones and joints',
      icon: 'https://img.icons8.com/ios-filled/50/000000/bone.png'
    },
    {
      name: 'Pediatrics',
      description: 'Compassionate care for infants, children and adolescents',
      icon: 'https://img.icons8.com/ios-filled/50/000000/baby.png'
    },
    {
      name: 'General Medicine',
      description: 'Primary care for all your health needs',
      icon: 'https://img.icons8.com/ios-filled/50/000000/medicine-bottle.png'
    },
    {
      name: 'Oncology',
      description: 'Advanced cancer treatment and care',
      icon: 'https://img.icons8.com/ios-filled/50/000000/ribbon.png'
    }
  ];

  doctors = [
    {
      id: 1,
      name: 'Priya Sharma',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      title: 'Cardiologist, MD',
      specialty: 'Cardiology',
      rating: 5,
      reviews: 124
    },
    {
      id: 2,
      name: 'Raj Patel',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      title: 'Neurosurgeon, PhD',
      specialty: 'Neurology',
      rating: 4,
      reviews: 89
    },
    {
      id: 3,
      name: 'Anjali Desai',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      title: 'Pediatrician, MD',
      specialty: 'Pediatrics',
      rating: 5,
      reviews: 156
    },
    {
      id: 4,
      name: 'Amit Singh',
      image: 'https://randomuser.me/api/portraits/men/71.jpg',
      title: 'Orthopedic Surgeon',
      specialty: 'Orthopedics',
      rating: 4,
      reviews: 72
    }
  ];

  testimonials = [
    {
      name: 'Vikram Mehta',
      condition: 'Cardiac Patient',
      text: 'The care I received at Yodha Hospital was exceptional. The cardiology team saved my life and provided compassionate care throughout my recovery.',
      image: 'https://randomuser.me/api/portraits/men/22.jpg'
    },
    {
      name: 'Sunita Reddy',
      condition: 'Pediatric Care',
      text: 'As a mother, I trust Yodha Hospital completely with my children\'s health. The pediatric team is knowledgeable and caring.',
      image: 'https://randomuser.me/api/portraits/women/36.jpg'
    },
    {
      name: 'Arun Khanna',
      condition: 'Orthopedic Surgery',
      text: 'My knee replacement surgery went smoothly and the aftercare was excellent. I\'m now pain-free and back to my daily activities.',
      image: 'https://randomuser.me/api/portraits/men/48.jpg'
    }
  ];
}
