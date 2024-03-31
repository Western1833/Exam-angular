import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<any>(`${environment.url}/users/login`, { email, password });
  }

  register(email: string, password: string, username: string) {
    return this.http.post<any>(`${environment.url}/users/register`, {email, password, username});
  }
}
