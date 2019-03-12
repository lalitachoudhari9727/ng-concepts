import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventManagerPlugin} from '@angular/platform-browser/src/dom/events/event_manager';
import {Employee} from '../models/employee';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
signupForm: FormGroup;
data: any;
employee: Employee;
isSubmitted: boolean;
  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      'fname': ['', [Validators.required]],
      'lname': ['', [Validators.required]],
      'email': ['', [ Validators.required, Validators.email]],
      'mobile': ['', [Validators.required, Validators.minLength(10)]]
    });

  }

  ngOnInit() {
  }

  postData(signupForm: FormGroup) {
    this.isSubmitted = true;
    this.data = signupForm.value;
   // signupForm.reset();

    }
}
