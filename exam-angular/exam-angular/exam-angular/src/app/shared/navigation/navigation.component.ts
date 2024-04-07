import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserForAuth } from 'src/interfaces/user.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {

  userDataInStorage: UserForAuth | null = null;
  private authSubscription!: Subscription;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.authState$.subscribe(user => {
      this.userDataInStorage = user;
    });
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  logout(): void {
    this.authService.logout().subscribe(
      () => {
        this.userDataInStorage = null;
        localStorage.removeItem('userData');
      },
      error => {
        console.error('Logout failed:', error);
      }
    );
  }
}
