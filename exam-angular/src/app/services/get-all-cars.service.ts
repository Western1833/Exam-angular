import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetAllCarsService {

  constructor(private http: HttpClient) { }

  getAllCars() {
    const url = environment.apiUrl;

    
  }
}
