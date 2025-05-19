import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  stars = [1, 2, 3, 4, 5];
  selectedRating = 0;
  feedbackComment = '';

  ratingLabels = [
    'Poor',
    'Fair',
    'Good',
    'Very Good',
    'Excellent'
  ];

  rate(star: number) {
    this.selectedRating = star;
  }

  onSubmit() {
    console.log('Feedback submitted:', {
      rating: this.selectedRating,
      comment: this.feedbackComment
    });
   
    alert('Thank you for your feedback!');
    this.resetForm();
  }

  resetForm() {
    this.selectedRating = 0;
    this.feedbackComment = '';
  }
}
