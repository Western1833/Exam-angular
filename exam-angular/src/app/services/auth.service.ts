import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import firebase from 'firebase/compat';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser$: Observable<firebase.User | null>;

  constructor(private afs: AngularFireAuth) {
    this.currentUser$ = this.afs.authState.pipe(
      map(user => user)
    );
  }

  loginWithEmailAndPassword(user: {email: string, password: string}) {
    return this.afs.signInWithEmailAndPassword(user.email, user.password);
  }

  async registerWithEmailAndPassword(email: string, password: string, username: string) {
    const userCredential = await this.afs.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    user?.updateProfile({ displayName: username })
      .then(() => {
        console.log('username updated');
        return user;
      })
      .catch((err) => {
        console.log('error updating username: ', err);
      });
  }

  logout(): Promise<void> {
    return this.afs.signOut();
  }
}
