import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserForAuth } from 'src/interfaces/user.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private authStateSubject: BehaviorSubject<UserForAuth | null> = new BehaviorSubject<UserForAuth | null>(null);
    public authState$: Observable<UserForAuth | null> = this.authStateSubject.asObservable();
  
    constructor(private http: HttpClient) {
      const userDataString = localStorage.getItem('userData');
      if (userDataString) {
        const userData: UserForAuth = JSON.parse(userDataString);
        this.authStateSubject.next(userData);
      }
    }
  
    login(email: string, password: string): Observable<UserForAuth> {
      return this.http.post<UserForAuth>('/users/login', { email, password });
    }
  
    register(email: string, password: string, username: string): Observable<UserForAuth> {
      return this.http.post<UserForAuth>('/users/register', { email, password, username });
    }
  
    logout(): Observable<any> {
      return this.http.get('/logout');
    }
  
    updateAuthState(user: UserForAuth | null): void {
      this.authStateSubject.next(user);
      if (user) {
        localStorage.setItem('userData', JSON.stringify(user));
      } else {
        localStorage.removeItem('userData');
      }
    }

    isAuthenticated(): boolean {
      return !!localStorage.getItem('userData');
    }
  }
