import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userId: string;
  password: string;
  constructor(private router: Router) { }

  ngOnInit() {
    }
  onSubmit(nav: string) {
    if (this.userId == 'admin123' && this.password == 'Iamadmin') {
      this.router.navigate([nav]);
    }
  }
}
