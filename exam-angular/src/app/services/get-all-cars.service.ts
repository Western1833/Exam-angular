import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from 'src/interfaces/car.interface';

@Injectable({
  providedIn: 'root'
})
export class GetAllCarsService {
  
  constructor(private http: HttpClient) { }
  
  getAllCars() {
    const url = 'https://my-angular-workshop-default-rtdb.firebaseio.com';
    return this.http.get<Car[]>(`${url}/cars.json`);
  }
}
