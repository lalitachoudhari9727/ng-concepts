import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventManagerPlugin} from '@angular/platform-browser/src/dom/events/event_manager';
import {Employee} from '../models/employee';
import {mobileNumberValidator} from '../validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
signupForm: FormGroup;
data: any;
employee: Employee = new Employee();
isSubmitted: boolean;
  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      'fname': ['', [Validators.required]],
      'lname': ['', [Validators.required]],
      'email': ['', [ Validators.required, Validators.email]],
      'mobile': ['', [Validators.required, mobileNumberValidator]]
    });

  }

  ngOnInit() {
  }

  postData(signupForm: FormGroup) {
    this.isSubmitted = true;
    this.data = signupForm.value;
   // signupForm.reset();

    }

  setValueChanges() {
    this.signupForm.setValue({
      'fname': 'lalita',
      'lname': 'choudhari',
      'email': 'lalita.choudhari@techprimelab.com',
      'mobile': '9766564374'
    });
  }

  patchValueChanges() {
     this.signupForm.patchValue({
       'fname': 'shri'
     });
  }

  resetValue() {
    this.signupForm.reset();
  }
}
