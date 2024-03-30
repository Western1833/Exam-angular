import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import firebase from 'firebase/compat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{

  currentUser: firebase.User | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

      // console.log(`  uid: ${this.currentUser!.uid}`);
      // console.log(`  email: ${this.currentUser!.email}`);
      // console.log(`  displayName: ${this.currentUser!.displayName}`);

  logout(): void {
    this.authService.logout().then(() => {
      this.currentUser = null;
      this.router.navigateByUrl('/login');
    }).catch((err) => {
      console.log('could not logout: ', err);
    })
  }
}
