import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private defaultApi: string = `${environment.apiURL}/users`;

  constructor(private http: HttpClient) { }

  getRestUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.defaultApi);
  }

}
