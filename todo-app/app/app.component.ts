import { Component, OnInit } from "@angular/core";
import { Todo } from './sdk/models/Todo';
import { API_PROVIDERS, LoopBackConfig, TodoApi } from './sdk';

@Component({
    selector: "my-app",
    templateUrl: './app.component.html',
    providers: [ API_PROVIDERS, TodoApi ],
})
export class AppComponent implements OnInit {

  private todo: Todo        = new Todo();
  private list: Array<Todo> = new Array();

  constructor(private ts: TodoApi) {
      // Update with your API Address, IP in same network or DNS
      LoopBackConfig.setBaseURL('http://192.168.100.5:3000');
      LoopBackConfig.setApiVersion('api');
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