import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TasksListComponent } from
'./components/tasks-list/tasks-list.component'; // Import Task List
component
import { TaskFormComponent } from
'./components/task-form/task-form.component'; // Import Task Form
component
@NgModule({
declarations: [
AppComponent,
TasksListComponent, // Add Task List component to the declarations
array before Task Form component
TaskFormComponent // Add Task Form component to the declarations
array
],
imports: [
BrowserModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }