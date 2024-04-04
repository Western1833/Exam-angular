import { Component, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsService } from 'src/app/services/details.service';
import { LikesService } from 'src/app/services/likes.service';
import { Car } from 'src/interfaces/car.interface';

@Component({
  selector: 'app-details-functionalities',
  templateUrl: './details-functionalities.component.html',
  styleUrls: ['./details-functionalities.component.css']
})
export class DetailsFunctionalitiesComponent implements OnChanges, OnInit {
  showPopup: boolean = false;

  @Input() carDetails: Car | undefined;

  isAuthenticated: boolean = false;
  isOwner: boolean = false;
  token: string = '';
  username: string = '';
  totalLikes: number = 0;
  hasLiked: boolean = false;

  //http://localhost:3030/data/likes?where=carId%3D%22a43aa49e-5e55-440d-9289-b460d3c1ec5d%22%20and%20_ownerId%3D%22d50d45e80f9eeeba37c309b028e81ed5efc9dab41fe216f668ed998915004afe%22&count


  constructor(private elementRef: ElementRef, private detailsService: DetailsService,
    private router: Router, private likesService: LikesService) { }

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
        this.username = currentUser?.username;

        this.fetchTotalLikes();
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
    if (!id) {
      return;
    }
    console.log('from component', id);
    this.detailsService.delete(id!).subscribe(() => {
      this.router.navigate(['/catalog']);
    })
  }

  onLikeClick() {
    this.likesService.sendLike(this.carDetails!._id, this.username).subscribe(() => {
      this.fetchTotalLikes();
    });
  }

  ngOnInit(): void {
    this.fetchTotalLikes();
  }

  private fetchTotalLikes(): void {
    const userDataString = localStorage.getItem('userData');
    const currentUser = JSON.parse(userDataString!);
    const currentUserId = currentUser?._id;
    if (this.carDetails) {
      this.likesService.getAllLikes(this.carDetails._id).subscribe(objectLikes => {
        const likes = JSON.stringify(objectLikes);
        this.totalLikes = Number(likes);
      });
      this.likesService.hasLiked(this.carDetails._id, currentUserId).subscribe(res => {
        console.log('res: ', res)
        console.log('res: ', this.carDetails?._id)
        console.log('res: ', currentUserId)
        if(res !== 0){
          this.hasLiked = true;
        }
      });
    }
  }
}
