import { TaskStatus } from "./task-status.model";

export class UserTaskStatus {
    taskId: number;
    status: TaskStatus;

    constructor(taskId: number, status: TaskStatus) {
      this.taskId = taskId;
      this.status = status;
    }

  }
  