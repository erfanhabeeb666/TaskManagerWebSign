import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import {}'./createaccount/createaccount.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: any;
  loggedIn: any;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService['authState'].subscribe((user:any) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  title = 'Signin';
}
