import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from 'src/interfaces/car.interface';
import { environment } from 'src/environments/environment.development';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AddCarService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  addCar(car : Car): Observable<Car[]> {
    const authToken = this.cookieService.get('firebaseAuthToken');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    });

    return this.http.post<Car[]>(environment.firebaseConfig.databaseURL + `/cars.json`, car, {headers});
  }
}
