import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { Repository } from './repository';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  readonly username = 'IgorDoring';
  private userUrl = 'https://api.github.com/users/'+this.username;

  constructor(private http: HttpClient) {}

  getUser(): Observable<User> {
    return this.http.get<User>(this.userUrl);
  }
  
  getRepos(): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.userUrl+'/repos');
  }

  
}
