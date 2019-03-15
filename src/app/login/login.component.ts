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
    sessionStorage.setItem('is_user_logged_in', 'false');
    }
  onSubmit(nav: string) {
    if (this.userId == 'admin123' && this.password == 'Iamadmin') {
      sessionStorage.setItem('is_user_logged_in',  'true');
      this.router.navigate([nav]);
    }
  }
}
