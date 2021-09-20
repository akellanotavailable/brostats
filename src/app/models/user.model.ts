import { UserTaskStatus } from "./user-task-status.model";

export class User {
    loginGithub: string;
    loginSlack: string;
    taskStatuses: UserTaskStatus[];

    constructor (loginGithub:string, loginSlack:string, taskStatuses: UserTaskStatus[]) {
      this.loginGithub = loginGithub;
      this.loginSlack = loginSlack;
      this.taskStatuses = taskStatuses;
    }

  }
  
