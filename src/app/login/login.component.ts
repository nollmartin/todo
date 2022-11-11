import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {User, users} from './users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:string = '';
  password:string = '';
  user: User | undefined;
  @Output() changeLogged = new EventEmitter<boolean>();
  constructor(private router:Router) { }

  ngOnInit(): void {
    let _user = localStorage.getItem('user');
    if (_user != null && _user != '') {
      this.user = JSON.parse(_user || '');
    } else {
      if (this.isUser()) {
        this.router.navigate([""]);
      }
    }
  }

  login() {
    if(this.isUser()) {
      localStorage.setItem('user', JSON.stringify(this.user));
    } else {
      alert('There is no same user or password!')
    }
    this.router.navigate([""]);
  }

  isUser(): boolean {
    let ret:boolean = false;
    users.forEach((_user) => {
      if(_user.name==this.username && _user.password==this.password) {
        this.user={name: _user.name};
        this.changeLogged.emit(true);
        ret=true;
      }
    })
    this.changeLogged.emit(false);
    return ret;
  }

  /*setLogged(arg0: boolean) {
    this.logout();
  }

  logout() {
    localStorage.removeItem('user');
    this.changeLogged.emit(false);
    this.router.navigate([""]);
  }*/
}

