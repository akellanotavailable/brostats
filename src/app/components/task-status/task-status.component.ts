import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Task } from 'src/app/models/task.model';
import { UsersService } from 'src/app/services/users.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-status',
  templateUrl: './task-status.component.html',
  styleUrls: ['./task-status.component.css']
})
export class TaskStatusComponent implements OnInit {

  tasks: Task[];

  users: User[];

  constructor(private tasksService: TasksService, private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.getTasks();
    this.getUsers();
  }

  getTasks(): void {
    this.tasksService.getRestTasks().subscribe(
      data => {
        this.tasks = data;
      });
  }

  getUsers(): void {
    this.usersService.getRestUsers().subscribe(
      data => {
        this.users = data;
      });
  }

}
