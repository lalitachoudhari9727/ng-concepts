import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-directives',
  templateUrl: './angular-directives.component.html',
  styleUrls: ['./angular-directives.component.css']
})
export class AngularDirectivesComponent implements OnInit {
technologyName: string;
persons: any = [
  {
    'name': 'Lalita Choudhari',
    'country': 'IND'
  },
  {
    'name': 'Shrikant Patki',
    'country': 'USA'
  },
  {
    'name': 'Swapnil Kadam',
    'country': 'HK'
  },
  {
    'name': 'Neha Zende',
    'country': 'UK'
  },
  {
    'name': 'Abhijeet Giram',
    'country': 'USA'
  }
];
  constructor() { }

  ngOnInit() {
    }

}
