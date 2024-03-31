import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  login(email: string, password: string) {
    return this.http.post<User>(`/users/login`, { email, password });
  }

  register(email: string, password: string, username: string) {
    return this.http.post<User>(`/users/register`, {email, password, username});
  }

  logout() {
    return this.http.get('/logout');
  }
}
