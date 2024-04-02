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
    return this.http.post<Car[]>(`/cars`, car);
  }
}
