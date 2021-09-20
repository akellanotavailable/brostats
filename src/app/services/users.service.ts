import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskStatus } from '../models/task-status.model';
import { UserTaskStatus } from '../models/user-task-status.model';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  private users: User[] = new Array;
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

  getMockUsers(): User[] {
    return this.usersMock;
  }

  getRestUsers(): User[] {
    this.users = [];
    this.http.get('http://localhost:8080/users').subscribe(
      (data: any) => {
        data.forEach((element: { loginGithub: string; loginSlack: string; taskStatuses: UserTaskStatus[]; }) => {
          this.users.push(new User(element.loginGithub, element.loginSlack, element.taskStatuses));
        });
      });
    return this.users;
  }

}
