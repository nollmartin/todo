import { Component, OnInit } from '@angular/core';
import {Todo} from './datas';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  newTodo:boolean = false;
  _name:string = '';
  _description:string = '';

  constructor() { }

  ngOnInit(): void {
    //localStorage.clear();
    let _todos = localStorage.getItem('todos');
    if (_todos != null && _todos != '') {
      this.todos = JSON.parse(_todos || '');
    }
    this.todos.sort((a, b) => {
      return (a.done > b.done)?1:-1;
    });
  }

  setTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
    this.todos.sort((a, b) => {
      return (a.done > b.done)?1:-1;
    });
  }

  add() {
    this.newTodo=this.newTodo===true?false:true;
  }

  addTodo() {
    this.todos.push({name: this._name, description: this._description, username: 'username', done: '0'});
    this._name='';
    this._description='';
    if (typeof this.todos != 'undefined') {
      this.setTodos();
    }
    this.newTodo=false;
  }

  setDone(i: number) {
    this.todos[i].done='1';
    this.setTodos();
  }

}
