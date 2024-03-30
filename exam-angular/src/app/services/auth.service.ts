import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import firebase from 'firebase/compat';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser$: Observable<firebase.User | null>;

  constructor(private afs: AngularFireAuth, private cookieService: CookieService) {
    this.currentUser$ = this.afs.authState.pipe(
      map(user => user)
    );
  }

  async loginWithEmailAndPassword(user: {email: string, password: string}): Promise<void> {
    try {
      const userCredential = await this.afs.signInWithEmailAndPassword(user.email, user.password);
      const token = await userCredential.user?.getIdToken();
      if (token) {
        this.cookieService.set('firebaseAuthToken', token);
      } else {
        throw new Error('Failed to get Firebase ID token.');
      }
    } catch (err) {
      console.log('Login error: ', err);
      throw err;
    }
  }

  async registerWithEmailAndPassword(email: string, password: string, username: string): Promise<void> {
    try {
      const userCredential = await this.afs.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      if (user) {
        await user.updateProfile({ displayName: username });
        await user.reload();
        const token = await user.getIdToken();
        this.cookieService.set('firebaseAuthToken', token);
      } else {
        console.error('Error: User not created.');
      }
      console.log('user info from authService: ', user?.displayName)
    } catch (error) {
      console.error('Error during registration:', error);
      throw error;
    }
  }

  logout(): Promise<void> {
    this.cookieService.delete('firebaseAuthToken');
    return this.afs.signOut();
  }
}
