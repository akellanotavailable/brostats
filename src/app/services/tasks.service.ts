import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private defaultApi: string = `${environment.apiURL}/tasks`;

  constructor (private http: HttpClient) {  }

  getRestTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.defaultApi);
  }

}
