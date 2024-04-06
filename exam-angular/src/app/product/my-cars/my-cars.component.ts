import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MyCarsService } from 'src/app/services/my-cars.service';
import { Car } from 'src/interfaces/car.interface';

@Component({
  selector: 'app-my-cars',
  templateUrl: './my-cars.component.html',
  styleUrls: ['./my-cars.component.css']
})
export class MyCarsComponent implements OnInit, OnDestroy {
  cars: Car[] = [];

  myCarsSubscription: Subscription | undefined;

  constructor(private api: MyCarsService) { }

  ngOnDestroy(): void {
    this.myCarsSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    if (this.myCarsSubscription) {
      this.myCarsSubscription.unsubscribe();
    }

    this.myCarsSubscription = this.api.getMyCars().subscribe((cars: Car[]) => {
      this.cars = Object.values(cars);
    })
  }
}