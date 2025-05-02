import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Patient {
  id: string;
  name: string;
  age: number;
  photo?: string;
  bloodType?: string;
  lastVisit?: Date;
}

interface VitalSign {
  name: string;
  value: string | number;
  unit: string;
  trend?: 'up' | 'down' | 'stable';
  critical?: boolean;
}

interface MedicalHistory {
  date: Date;
  diagnosis: string;
  medications: string;
  treatment?: string;
}

@Component({
  selector: 'app-dashboard',
  // standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  patient: Patient = {
    id: 'PAT-789456',
    name: 'Manoj',
    age: 30,
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    bloodType: 'A+',
    lastVisit: new Date()
  };

  vitals: VitalSign[] = [
    { name: 'Heart Rate', value: 72, unit: 'bpm', trend: 'stable' },
    { name: 'Blood Pressure', value: '140/90', unit: 'mmHg', trend: 'up', critical: true },
    { name: 'Temperature', value: 98.6, unit: '°F', trend: 'stable' },
    { name: 'Oxygen', value: 98, unit: '%', trend: 'up' }
  ];

  medicalHistory: MedicalHistory[] = [
    { date: new Date('2025-04-10'), diagnosis: 'Fever', medications: 'Paracetamol' },
    { date: new Date('2025-03-21'), diagnosis: 'High BP', medications: 'Amlodipine' },
    { date: new Date('2025-02-15'), diagnosis: 'Common Cold', medications: 'Antihistamines' }
  ];

  vitalsHistory = [
    { date: 'Apr 22', heartRate: 72, bp: '120/80', temp: 98.6, oxygen: 98 },
    { date: 'Apr 21', heartRate: 74, bp: '122/82', temp: 98.7, oxygen: 97 },
    { date: 'Apr 20', heartRate: 71, bp: '118/78', temp: 98.4, oxygen: 99 }
  ];

  isEditing = false;
  editedPatient = { ...this.patient };
  isLoading = false;

  getTrendIcon(trend?: string): string {
    switch (trend) {
      case 'up': return '↑';
      case 'down': return '↓';
      default: return '→';
    }
  }

  startEdit() {
    this.isEditing = true;
    this.editedPatient = { ...this.patient };
  }

  saveChanges() {
    this.patient = { ...this.editedPatient };
    this.isEditing = false;
  }

  cancelEdit() {
    this.isEditing = false;
  }

  downloadReport() {
    this.isLoading = true;
    // Simulate PDF generation
    setTimeout(() => {
      alert('PDF report generated!');
      this.isLoading = false;
    }, 1500);
  }

  checkCritical(vital: VitalSign): boolean {
    if (vital.name === 'Blood Pressure') {
      const [systolic, diastolic] = (vital.value as string).split('/').map(Number);
      return systolic > 140 || diastolic > 90;
    }
    if (vital.name === 'Heart Rate') {
      return (vital.value as number) < 60 || (vital.value as number) > 100;
    }
    return false;
  }
}
