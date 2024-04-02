import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Car } from 'src/interfaces/car.interface';

@Injectable({
  providedIn: 'root'
})
export class MyCarsService {
  
  constructor(private http: HttpClient) { }
  
  getMyCars() {
    const currentUser = localStorage.getItem('userData');
    let userId: string | undefined;

    if (currentUser) {
      const userData = JSON.parse(currentUser);
      userId = userData?._id;
    }
    
    return this.http.get<Car[]>(`${environment.url}/data/cars?where=_ownerId%3D%22${userId}%22`);
  }
}
