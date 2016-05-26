import { Component, OnInit } from "@angular/core";
import { HTTP_PROVIDERS } from '@angular/http';
import { Todo } from './definitions';
import { TodoApi } from './sdk/lb.services';

@Component({
    selector: "my-app",
    templateUrl: './app.component.html',
    providers: [TodoApi, HTTP_PROVIDERS],
})
export class AppComponent implements OnInit {

  private todo: Todo        = new Todo();
  private list: Array<Todo> = new Array();

  constructor(private ts: TodoApi) {
      this.ts.setBaseURL('http://192.168.0.1:3000/api');
  }

  ngOnInit() {
      this.getTodos();
  }
  
  addTodo(): void {
   this.ts.create(this.todo).subscribe(res => {
     this.todo = new Todo();
     this.list.push(res);
    });
  }
  
  getTodos(): void {
    this.ts.find().subscribe(res => (this.list = res));
  }
}