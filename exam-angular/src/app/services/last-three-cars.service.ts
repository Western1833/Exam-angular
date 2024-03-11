import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from 'src/interfaces/car.interface';

@Injectable({
  providedIn: 'root'
})
export class LastThreeCarsService {

  constructor(private http: HttpClient) { }

  getLastThreeCars() {
    const url = 'https://my-angular-workshop-default-rtdb.firebaseio.com';

    return this.http.get<Car[]>(`${url}/cars.json?orderBy="timestamp"&limitToLast=3`);
  }
}
