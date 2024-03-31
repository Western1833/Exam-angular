import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      localStorage.removeItem('accessToken');
      this.router.navigate(['/']);
    },
    error => {
      console.error('Logout failed:', error);
    })
  }
}
