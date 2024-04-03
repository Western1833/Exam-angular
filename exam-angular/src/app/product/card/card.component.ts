import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsService } from 'src/app/services/details.service';
import { Car } from 'src/interfaces/car.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor(private detailsService: DetailsService, private router: Router) {}

  @Input() car: Car = {
    imageUrl: '',
    brand: '',
    model: '',
    price: null,
    year: '',
    description: '',
    phoneNumber: '',
    _ownerId: '',
    _id: ''
  };

  onDetailsClick(): void {
    const id = this.car._id;

    this.router.navigate(['/details', id]);
  }
}
