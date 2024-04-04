import { Component, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsService } from 'src/app/services/details.service';
import { Car } from 'src/interfaces/car.interface';

@Component({
  selector: 'app-details-functionalities',
  templateUrl: './details-functionalities.component.html',
  styleUrls: ['./details-functionalities.component.css']
})
export class DetailsFunctionalitiesComponent implements OnChanges {
  showPopup: boolean = false;

  @Input() carDetails: Car | undefined;

  isAuthenticated: boolean = false;
  isOwner: boolean = false;
  token: string = '';

  constructor(private elementRef: ElementRef, private detailsService: DetailsService, private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    if ('carDetails' in changes) {
      const userDataString = localStorage.getItem('userData');
      if (userDataString) {
        const currentUser = JSON.parse(userDataString);
        const currentUserId = currentUser?._id;
        const currentCarOwner = this.carDetails?._ownerId;
        if (currentCarOwner === currentUserId) {
          this.isOwner = true;
        }
        this.isAuthenticated = true;
        this.token = currentUser?.accessToken;
      }
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(event: any) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.showPopup = false;
    }
  }

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  onDelete() {
    const id = this.carDetails?._id;
    if(!id){
      return;
    }
    console.log('from component', id);
    this.detailsService.delete(id!).subscribe(() => {
      this.router.navigate(['/catalog']);
    })
  }
}
