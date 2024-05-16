// components/task-form/task-form.component.ts
import { Component, OnInit } from '@angular/core';
import { Task } from '../../constants/tasks.interface';
@Component({
selector: 'app-tasks-form',
templateUrl: './tasks-form.component.html'
})
export class TasksFormComponent implements OnInit {
tasks: Task[] = [];
newTask: string = '';
constructor() { }
ngOnInit(): void {
}
addTask() {
if (this.newTask.trim() !== '') {
const newTask: Task = {
name: this.newTask,
completed: false
};
this.tasks.push(newTask);
this.newTask = '';
}
}
}
