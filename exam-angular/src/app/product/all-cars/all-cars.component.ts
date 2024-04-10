import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetAllCarsService } from 'src/app/services/get-all-cars.service';
import { Car } from 'src/interfaces/car.interface';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.css']
})
export class AllCarsComponent implements OnInit, OnDestroy{

  cars: Car[] = [];

  allCarsSubscription: Subscription | undefined;

  constructor (private api: GetAllCarsService) {}

  ngOnDestroy(): void {
    this.allCarsSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.allCarsSubscription?.unsubscribe();

    this.allCarsSubscription = this.api.getAllCars().subscribe((cars: Car[]) => {
      this.cars = Object.values(cars);
    })
  }
}
