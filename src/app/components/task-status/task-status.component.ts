import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Task } from 'src/app/models/task.model';
import { TaskStatus } from 'src/app/models/task-status.model';
import { UsersService } from 'src/app/services/users.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-status',
  templateUrl: './task-status.component.html',
  styleUrls: ['./task-status.component.css']
})
export class TaskStatusComponent implements OnInit {

  taskList: Task[];

  users: User[];

  constructor(private tasksServce: TasksService, private usersService: UsersService ) {
    this.taskList = tasksServce.getRestTasks();
    this.users = usersService.getRestUsers();
   }

  ngOnInit(): void {
    
  }

  isTaskStatusEqual(taskStatus: TaskStatus, statusExpected: string) : boolean {
    if (taskStatus == statusExpected) {
      return true;
    }
    else { return false; }
  }
}
