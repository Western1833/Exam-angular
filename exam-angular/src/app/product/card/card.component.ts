import { Component, Input } from '@angular/core';
import { Car } from 'src/interfaces/car.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() car: Car = {
    image: 'https://cdn3.focus.bg/autodata/i/bmw/5er/5er-e60/large/e3cc377b35adf71eb67e8a8e977f93eb.jpg',
    brand: 'BMW',
    model: '530',
    price: 7000,
    year: '',
    description: '',
    phoneNumber: '',
    timestamp: null
  };
}
