import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jwtrequest } from '../Security/jwtrequest';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private token: string;
  private loginUrl = "http://localhost:8081/moneylend/authenticate"

  constructor(private http: HttpClient) {}

  login(jwtrequest:Jwtrequest): Observable<any> {
    const username=jwtrequest.username;
    const password=jwtrequest.password;
       const body = { username ,password };
    return this.http.post(this.loginUrl, body);
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }
  getRole(): string {
    return localStorage.getItem('Role');
  }

  DropRole(): void {
    localStorage.removeItem('Role');
  }
  


 








  }



