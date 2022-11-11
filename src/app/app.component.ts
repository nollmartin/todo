import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';
  logged:boolean = false;
  constructor(private authService:AuthService, private router:Router) {console.log(localStorage)}

  logout() {
    localStorage.removeItem('user');
    this.logged=false;
    this.router.navigate([""]);
  }

  loggedChanged(logged:boolean) {
    this.logged=logged;
    console.log(this.logged);
  }
}
