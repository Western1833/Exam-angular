import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Car } from 'src/interfaces/car.interface';


@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient) { }

  carDetails(id: string): Observable<Car> {
    return this.http.get<Car>(`${environment.urlDetails}/${id}`);
  }
}
