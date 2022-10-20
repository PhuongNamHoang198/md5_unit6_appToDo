import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl, FormGroup, Validators} from '@angular/forms';

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  // todos là một mảng các Todo
  content = new FormControl();

  constructor() {
  }

  ngOnInit() {
  }

  // toggleTodo(i: number) {
  //   this.todos[i].complete = !this.todos[i].complete;
  // }
  toggleTodo(i:number) {
    this.todos[i].complete = !this.todos[i].complete;
    // this.todos[i].complete dùng để lấy giá trị của complete
    // ở vị trí i ,  true --> false, hoặc false --> true
    // !this.todos[i].complete : lấy ngược lại của giá trị true hoặc false
    // nếu là true --> nó sẽ trả ra false, ngược lại trả về true
  }

  // change() {
  //   const value = this.content.value;
  //   if (value) {
  //     const todo: Todo = {
  //       id: _id++,
  //       content: value,
  //       complete: false
  //     };
  //     this.todos.push(todo);
  //     this.content.reset();
  //   }
  // }
  change() {
    const value = this.content.value;
    if (value) {
      const todo:Todo = {
        id: _id++,
        content:value,
        complete: false
      }
      this.todos.push(todo);
      this.content.reset();
    }
  }
}
