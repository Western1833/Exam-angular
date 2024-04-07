import { Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DetailsService } from 'src/app/services/details.service';
import { Car } from 'src/interfaces/car.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy{
  showPopup: boolean = false;
  carId: string =  '';
  carDetails: Car | undefined;
  carDetailsSubscription!: Subscription;
  
  constructor(private detailsService: DetailsService, private route: ActivatedRoute) {
    this.route.params.subscribe(param => {
      this.carId = param['id'];
    })
  }

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  ngOnInit(): void {
    if(this.carId){
      this.carDetailsSubscription = this.detailsService.carDetails(this.carId)
        .subscribe(carDetails => {
          this.carDetails = carDetails;
        });
    }
  }

  ngOnDestroy(): void {
    if (this.carDetailsSubscription) {
      this.carDetailsSubscription.unsubscribe();
    }
  }
}
