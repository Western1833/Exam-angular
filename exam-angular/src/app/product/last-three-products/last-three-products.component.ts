import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LastThreeCarsService } from 'src/app/services/last-three-cars.service';
import { Car } from 'src/interfaces/car.interface';

@Component({
  selector: 'app-last-three-products',
  templateUrl: './last-three-products.component.html',
  styleUrls: ['./last-three-products.component.css']
})
export class LastThreeProductsComponent implements OnInit, OnDestroy {
  cars: Car[] = [];

  lastThreeCarsSubscription: Subscription | undefined;

  constructor(private api: LastThreeCarsService) { }

  ngOnDestroy(): void {
    this.lastThreeCarsSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    if (this.lastThreeCarsSubscription) {
      this.lastThreeCarsSubscription.unsubscribe();
    }
    
    this.lastThreeCarsSubscription = this.api.getLastThreeCars().subscribe((cars: Car[]) => {
      this.cars = Object.values(cars);
    });
  }
}
