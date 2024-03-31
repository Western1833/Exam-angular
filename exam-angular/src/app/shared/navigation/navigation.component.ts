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
      this.router.navigate(['/login']);
    },
    error => {
      // Handle logout error
      console.error('Logout failed:', error);
      // Optionally inform the user about the logout failure
      // For example, you can show a toast message or display an error dialog
    })
  }
}
