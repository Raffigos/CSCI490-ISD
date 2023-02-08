import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Feedback } from '../feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  feedbacks: Feedback[] | any;
  selectedFeedback: Feedback = {
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    country: null,
    text: null,
  };
  constructor(private dataService: DataService) {
    this.dataService.readFeedback().subscribe((feedbacks: Feedback[]) => {
      this.feedbacks = feedbacks;
      console.log(this.feedbacks);
    });
  }

  ngOnInit(): void {}

  createFeedback(form: { value: Feedback }) {
    form.value.id = this.selectedFeedback.id;
    form.value.firstName = this.selectedFeedback.firstName;
    form.value.lastName = this.selectedFeedback.lastName;
    form.value.email = this.selectedFeedback.email;
    form.value.country = this.selectedFeedback.country;
    form.value.text = this.selectedFeedback.text;
    if (this.selectedFeedback && this.selectedFeedback.id) {
      this.dataService.readFeedback().subscribe((feedbacks: Feedback[]) => {
        this.feedbacks = feedbacks;
      });
    } else {
      this.dataService
        .createFeedback(form.value)
        .subscribe((feedback: Feedback) => {
          console.log('User created, ', feedback);
          this.dataService.readFeedback().subscribe((feedbacks: Feedback[]) => {
            this.feedbacks = feedbacks;
          });
        });
    }
  }

  selectUser(feedback: Feedback) {
    this.selectedFeedback = feedback;
  }
}
