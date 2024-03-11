import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from 'src/interfaces/car.interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LastThreeCarsService {

  constructor(private http: HttpClient) { }

  getLastThreeCars() {
    const {apiUrl} = environment;

    return this.http.get<Car[]>(`${apiUrl}/cars.json?orderBy="timestamp"&limitToLast=3`);
  }
}
