import { Component, Input } from '@angular/core';
import { Car } from 'src/interfaces/car.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() car: Car = {
    'car-image': '',
    'car-brand': '',
    'car-model': '',
    price: null,
    year: '',
    description: '',
    'phone-number': '',
    timestamp: null,
    owner: ''
  };
}
