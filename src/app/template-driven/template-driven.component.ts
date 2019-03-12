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
  employee: Employee;
  constant = Constants;
  constructor() { }

  ngOnInit() {
  }

  register(regForm: any) {
  //  this.details = JSON.stringify(regForm);
  }

  changeModel() {

  }
}
