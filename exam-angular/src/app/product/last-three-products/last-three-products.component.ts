import { Component, OnInit } from '@angular/core';
import { LastThreeCarsService } from 'src/app/services/last-three-cars.service';
import { Car } from 'src/interfaces/car.interface';

@Component({
  selector: 'app-last-three-products',
  templateUrl: './last-three-products.component.html',
  styleUrls: ['./last-three-products.component.css']
})
export class LastThreeProductsComponent implements OnInit {
  //https://my-angular-workshop-default-rtdb.firebaseio.com/cars.json?orderBy="timestamp"&limitToLast=3

  cars: Car[] = [];

  constructor(private api: LastThreeCarsService) { }

  ngOnInit(): void {
    this.api.getLastThreeCars().subscribe((cars: Car[]) => {
      this.cars = Object.values(cars);
    });
  }
}
