import { Component } from '@angular/core';
import { AddCarService } from 'src/app/services/add-car.service';
import { Car } from 'src/interfaces/car.interface';

@Component({
  selector: 'app-create-car-form',
  templateUrl: './create-car-form.component.html',
  styleUrls: ['./create-car-form.component.css']
})
export class CreateCarFormComponent {
  car: Car = {
    image: '',
    brand: '',
    model: '',
    year: '',
    price: null,
    description: '',
    phoneNumber: '',
    timestamp: null
    // userId: '',
    // likes: [],
    // comments: []
  };

  constructor(private addCarService: AddCarService) { }

  onSubmit() {
    if (this.isValidCar(this.car)) {
      this.car.timestamp = new Date().getTime();
      this.addCarService.addCar(this.car).subscribe({
        next: () => { 
          this.car.brand = '';
          this.car.description = '';
          this.car.image = '';
          this.car.model = '';
          this.car.phoneNumber = '';
          this.car.price = null;
          this.car.year = '';
        },
        error: (err) => {
          console.error('Error adding car:', err);
        }
      });
    } else {
      console.error('Form is not valid. Please fill in all required fields.');
    }
  }

  private isValidCar(car: Car): boolean {
    return (
      car.image.trim() !== '' &&
      car.brand.trim() !== '' &&
      car.model.trim() !== '' &&
      car.year.trim() !== '' &&
      car.price !== null && !isNaN(car.price) && car.price > 0 &&
      car.description.trim() !== '' &&
      car.phoneNumber.trim() !== '' &&
      !isNaN(Number(car.phoneNumber))
    );
  }
}
