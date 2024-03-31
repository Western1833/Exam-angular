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
    return this.http.get<Car[]>(`${environment.url}/data/cars?sortBy=_createdOn desc&offset=0&pageSize=3`);
  }
}
