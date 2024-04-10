import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Car } from 'src/interfaces/car.interface';

@Injectable({
  providedIn: 'root'
})
export class GetAllCarsService {
  
  constructor(private http: HttpClient) { }
  
  getAllCars() {
    return this.http.get<Car[]>(`${environment.url}/data/cars`);
  }
}
