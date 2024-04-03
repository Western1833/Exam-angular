import { Component, HostListener, ElementRef, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from 'src/app/services/details.service';
import { Car } from 'src/interfaces/car.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  showPopup: boolean = false;
  carId: string =  '';
  carDetails: Car | undefined;

  constructor(private elementRef: ElementRef, private detailsService: DetailsService, private route: ActivatedRoute) {
    this.route.params.subscribe(param => {
      this.carId = param['id'];
    })
  }

  togglePopup() {
    this.showPopup = !this.showPopup;
  }
  
  @HostListener('document:click', ['$event'])
  onClick(event: any) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.showPopup = false;
    }
  }

ngOnInit(): void {
   if(this.carId){
    this.detailsService.carDetails(this.carId).subscribe(carDetails => {
      this.carDetails = carDetails;
    })
   }
  }
}
