import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks: Task[];
  private tasksMock: Task[] = [{ id: 1, name: "checkstyle" }, { id: 2, name: "primitives" }, { id: 3, name: "boxing" }, { id: 4, name: "valueref" },
  { id: 5, name: "equals/hashcode" }, { id: 6, name: "patform" }, { id: 7, name: "bytecode" }, { id: 8, name: "gc" }, { id: 9, name: "exceptions" },
  { id: 10, name: "classpath" }, { id: 11, name: "inner/classes" }, { id: 12, name: "inner/classes" }, { id: 13, name: "override/overload" },
  { id: 14, name: "strings" }, { id: 15, name: "gamelife" }];

  getTasks(): Task[] {
    return this.tasksMock;
  }
}
