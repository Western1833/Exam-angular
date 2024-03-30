import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddCarService } from 'src/app/services/add-car.service';
import { Car } from 'src/interfaces/car.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-car-form',
  templateUrl: './create-car-form.component.html',
  styleUrls: ['./create-car-form.component.css'],
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
    timestamp: null,
    owner: '',
    // likes: [],
    // comments: []
  };

  constructor(private addCarService: AddCarService, private authService: AuthService) { }

  onSubmit(form: NgForm) {
    this.car.timestamp = new Date().getTime();

    this.authService.currentUser$.subscribe(user => {
      this.car.owner = user?.uid ? user.uid : '';
    })


    const { 'car-image': carImage, 'car-brand': carBrand, 'car-model': carModel, year, price, description, 'phone-number': phoneNumber } = form.value;

    const carData: Car = {
      'car-image': carImage,
      'car-brand': carBrand,
      'car-model': carModel,
      year,
      price,
      description,
      'phone-number': phoneNumber,
      timestamp: this.car.timestamp,
      owner: this.car.owner
    };

    this.addCarService.addCar(carData).subscribe({
      next: () => {
        form.setValue({
          'car-image': '', 
          'car-brand': '', 
          'car-model': '', 
          'year': '', 
          'price': null, 
          'description': '', 
          'phone-number': ''
        });
      },
      error: (err) => {
        console.error('Error adding car:', err);
      }
    });
  }
}
