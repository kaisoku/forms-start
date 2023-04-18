import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') formData: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  gender = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  submittedForm = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    /* this.formData.setValue({
      userData: {
        username: suggestedName,
        email: '',
      },
      secretQuestion: 'pet',
      questionAnswer: '',
      gender: 'male',
    }); */
    this.formData.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  /* onSubmit(form: NgForm) {
    console.log('Submitted!', form.value);
  } */

  onSubmit() {
    this.submittedForm = true;
    this.user.username = this.formData.value.userData.username;
    this.user.email = this.formData.value.userData.email;
    this.user.secretQuestion = this.formData.value.secretQuestion;
    this.user.answer = this.formData.value.questionAnswer;
    this.user.gender = this.formData.value.gender;

    this.formData.reset();
  }
}
