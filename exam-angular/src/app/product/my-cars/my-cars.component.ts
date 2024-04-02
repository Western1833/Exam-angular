import { Component, OnInit } from '@angular/core';
import { MyCarsService } from 'src/app/services/my-cars.service';
import { Car } from 'src/interfaces/car.interface';

@Component({
  selector: 'app-my-cars',
  templateUrl: './my-cars.component.html',
  styleUrls: ['./my-cars.component.css']
})
export class MyCarsComponent implements OnInit{
  cars: Car[] = [];

constructor (private api: MyCarsService) {}

ngOnInit(): void {

  this.api.getMyCars().subscribe((cars: any) => {
    this.cars = Object.values(cars);
  })
}
}