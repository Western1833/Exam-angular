import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from 'src/interfaces/car.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LastThreeCarsService {

  constructor(private http: HttpClient) { }

  getLastThreeCars() {
    return this.http.get<Car[]>(`${environment.firebaseConfig.databaseURL}/cars.json?orderBy="timestamp"&limitToLast=3`);
  }
}
