import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from 'src/interfaces/car.interface';

@Injectable({
  providedIn: 'root'
})
export class AddCarService {

  constructor(private http: HttpClient) { }

  addCar(car : Car): Observable<Car[]> {
    // Assuming you have an API endpoint for adding a car
    const apiUrl = 'https://my-angular-workshop-default-rtdb.firebaseio.com/cars.json';
    // You can modify this URL to match your backend API endpoint

    // Make a POST request to your API endpoint with the car data
    return this.http.post<Car[]>(apiUrl, car);
  }
}
