import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddCarService } from 'src/app/services/add-car.service';
import { AuthService } from 'src/app/services/auth.service';
import { Car } from 'src/interfaces/car.interface';

@Component({
  selector: 'app-create-car-form',
  templateUrl: './create-car-form.component.html',
  styleUrls: ['./create-car-form.component.css'],
})
export class CreateCarFormComponent {
  car: Car = {
    imageUrl: '',
    brand: '',
    model: '',
    year: '',
    price: null,
    description: '',
    phoneNumber: '',
    _ownerId: '',
    _id: ''
  };

  constructor(private addCarService: AddCarService, private authService: AuthService) { }


  onSubmit(form: NgForm) {

    const { 'imageUrl': carImage, 'brand': carBrand, 'model': carModel, year, price, description, 'phoneNumber': phoneNumber } = form.value;

    const carData: Car = {
      imageUrl: carImage,
      brand: carBrand,
      model: carModel,
      year,
      price,
      description,
      phoneNumber: phoneNumber,
      _ownerId: '',
      _id: ''
    };

    this.addCarService.addCar(carData).subscribe({
      next: () => {
        form.setValue({
          'imageUrl': '',
          'brand': '',
          'model': '',
          'year': '',
          'price': null,
          'description': '',
          'phoneNumber': ''
        });
      },
      error: (err) => {
        console.error('Error adding car:', err);
      }
    });
  }
}
