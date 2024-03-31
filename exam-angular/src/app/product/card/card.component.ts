import { Component, Input } from '@angular/core';
import { Car } from 'src/interfaces/car.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() car: Car = {
    imageUrl: '',
    brand: '',
    model: '',
    price: null,
    year: '',
    description: '',
    phoneNumber: '',
    timestamp: null,
    _ownerId: ''
  };
}
