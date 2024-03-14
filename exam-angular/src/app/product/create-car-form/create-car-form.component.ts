import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddCarService } from 'src/app/services/add-car.service';
import { Car } from 'src/interfaces/car.interface';

@Component({
  selector: 'app-create-car-form',
  templateUrl: './create-car-form.component.html',
  styleUrls: ['./create-car-form.component.css']
})
export class CreateCarFormComponent {
  car: Car = {
    'car-image': '',
    'car-brand': '',
    'car-model': '',
    year: '',
    price: null,
    description: '',
    'phone-number': '',
    timestamp: null
    // userId: '',
    // likes: [],
    // comments: []
  };

  constructor(private addCarService: AddCarService) { }

  onSubmit(form: NgForm) {
    this.car.timestamp = new Date().getTime();

    const { 'car-image': carImage, 'car-brand': carBrand, 'car-model': carModel, year, price, description, 'phone-number': phoneNumber } = form.value;

    console.log('car-image', 'car-brand', 'car-model', year, price, description, phoneNumber)

    const carData: Car = {
      'car-image': carImage,
      'car-brand': carBrand,
      'car-model': carModel,
      year,
      price,
      description,
      'phone-number': phoneNumber,
      timestamp: this.car.timestamp
    };

    console.log(carData)

    this.addCarService.addCar(carData).subscribe({
      next: () => {
       console.log('Car added: ', carData);
      },
      error: (err) => {
        console.error('Error adding car:', err);
      }
    });
  }
}
