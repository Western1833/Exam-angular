import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  constructor(private http: HttpClient) { }

  sendLike(carId: string, username: string) {
    return this.http.post('/likes', {carId, username});
  }

  getAllLikes(carId: string){
    return this.http.get(`${environment.urlData}/likes/?where=carId%3D%22${carId}%22&count`);
  }

  hasLiked(carId: string, userId: string){
    return this.http.get(`${environment.urlData}/likes?where=carId%3D%22${carId}%22%20and%20_ownerId%3D%22${userId}%22&count
    `)
  }
}
