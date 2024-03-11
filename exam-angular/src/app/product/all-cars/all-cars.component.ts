import { Component, OnInit } from '@angular/core';
import { GetAllCarsService } from 'src/app/services/get-all-cars.service';
import { Car } from 'src/interfaces/car.interface';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.css']
})
export class AllCarsComponent implements OnInit{

  cars: Car[] = [];

  constructor (private api: GetAllCarsService) {}

  ngOnInit(): void {
    this.api.getAllCars().subscribe((cars: any) => {
      this.cars = Object.values(cars);
    })
  }
}
