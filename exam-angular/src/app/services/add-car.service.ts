import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from 'src/interfaces/car.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AddCarService {

  constructor(private http: HttpClient) { }

  addCar(car : Car): Observable<Car[]> {
    return this.http.post<Car[]>(environment.firebaseConfig.databaseURL, car);
  }
}
