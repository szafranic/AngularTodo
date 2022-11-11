import { Component } from '@angular/core';
import { ToDo } from 'src/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo';

  todoList: ToDo[] = [
	{task:"take vitamin",completed:false},
	{task:"sleep",completed:false},
	{task:"sleep more",completed:false},
	{task:"eat",completed:true},
	{task:"wow",completed:false}
  ];

  completeTask(index:number){
	this.todoList[index].completed = true;
  }

  addTask(){
	let newTask:string = (<HTMLInputElement> document.getElementById("NewItem")).value;
	this.todoList.push({task:newTask, completed:false});
	(<HTMLInputElement> document.getElementById("NewItem")).value = '';
}	

  mouseGreen(index:number){
	
  }

}
