import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router) { }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate([""]);
  }
}
