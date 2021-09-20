import { Injectable } from '@angular/core';
import { TaskStatus } from '../models/task-status.model';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  private users: User[];
  private usersMock: User[] = [
    {
      loginGithub: "akella", loginSlack: "", taskStatuses: [
        { taskId: 1, status: TaskStatus.done },
        { taskId: 2, status: TaskStatus.done },
        { taskId: 3, status: TaskStatus.done },
        { taskId: 4, status: TaskStatus.done },
        { taskId: 5, status: TaskStatus.done },
        { taskId: 6, status: TaskStatus.done },
        { taskId: 7, status: TaskStatus.readyForReview },
        { taskId: 8, status: TaskStatus.readyForReview },
        { taskId: 9, status: TaskStatus.readyForReview },
        { taskId: 10, status: TaskStatus.readyForReview },
        { taskId: 11, status: TaskStatus.changesRequested },
        { taskId: 12, status: TaskStatus.changesRequested },
        { taskId: 13, status: TaskStatus.changesRequested },
        { taskId: 14, status: TaskStatus.pull },
        { taskId: 15, status: TaskStatus.pull }
      ]
    },
    {
      loginGithub: "loshped", loginSlack: "", taskStatuses: [
        { taskId: 1, status: TaskStatus.done },
        { taskId: 2, status: TaskStatus.done },
        { taskId: 3, status: TaskStatus.done },
        { taskId: 4, status: TaskStatus.readyForReview },
        { taskId: 5, status: TaskStatus.readyForReview },
        { taskId: 6, status: TaskStatus.readyForReview },
        { taskId: 7, status: TaskStatus.readyForReview },
        { taskId: 8, status: TaskStatus.changesRequested },
        { taskId: 9, status: TaskStatus.changesRequested },
        { taskId: 10, status: TaskStatus.changesRequested },
        { taskId: 11, status: TaskStatus.pull },
        { taskId: 12, status: TaskStatus.pull },
        { taskId: 13, status: TaskStatus.pull },
        { taskId: 14, status: TaskStatus.none },
        { taskId: 15, status: TaskStatus.none }
      ]
    }
  ];

  getUsers(): User[] {
    return this.usersMock;
  }
}
