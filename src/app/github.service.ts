import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  readonly username = 'IgorDoring';
  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  
}
