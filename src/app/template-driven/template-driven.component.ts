import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Constants} from '../constants';
import {Employee} from '../models/employee';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  gender: string;
  constant = Constants;
  hobbies: string[] = new Array(0);
  constructor() { }

  ngOnInit() {
  }

  register(regForm: any) {
  //  this.details = JSON.stringify(regForm);
  }

  changeModel() {

  }

  onChangeHobbies(hob: string) {
    this.hobbies.push(hob);
  }

  onChangeGender(item: string) {
    this.gender = item;
  }
}
