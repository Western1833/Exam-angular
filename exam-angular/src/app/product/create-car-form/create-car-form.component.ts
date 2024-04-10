import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddCarService } from 'src/app/services/add-car.service';
import { Car } from 'src/interfaces/car.interface';

@Component({
  selector: 'app-create-car-form',
  templateUrl: './create-car-form.component.html',
  styleUrls: ['./create-car-form.component.css'],
})
export class CreateCarFormComponent implements OnDestroy{

  carModels: string[] = [];

  car: Car = {
    imageUrl: '',
    brand: '',
    model: '',
    year: '',
    price: null,
    description: '',
    phoneNumber: null,
    _ownerId: '',
    _id: ''
  };

  private addCarSubscription: Subscription | undefined;

  constructor(private addCarService: AddCarService, private router: Router) { }

  ngOnDestroy(): void {
    if (this.addCarSubscription) {
      this.addCarSubscription.unsubscribe();
    }
  }

  updateModels(brand: string) {
    const modelsMap: { [key: string]: string[] } = {
      Audi: ['A3', 'A4', 'A6', 'A8'],
      BMW: ['1 Series', '3 Series', '5 Series', '7 Series'],
      Mercedes: ['A Class', 'B Class', 'C Class', 'E Class', 'S Class'],
      Honda: ['Accord', 'Civic', 'Jazz'],
      Opel: ['Astra', 'Corsa', 'Insignia'],
      Mazda: ['3', '6']
    };

    this.carModels = modelsMap[brand] || [];
  }

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

    if(carData.price! <= 0 || carData.phoneNumber! <= 0){
      throw new Error("Price or phone number can't be negative numbers!")
    }

    if(!carData.brand || !carData.imageUrl || !carData.model || !carData.phoneNumber || !carData.description || !carData.price || !carData.year){
      throw new Error('All fields are required!');
    }

    this.addCarSubscription = this.addCarService.addCar(carData).subscribe({
      next: () => {
        form.setValue({
          'imageUrl': '',
          'brand': '',
          'model': '',
          'year': '',
          'price': null,
          'description': '',
          'phoneNumber': null
        });
        this.router.navigate(['/data/catalog']);
      },
      error: (err) => {
        console.error('Error adding car:', err);
      }
    });
  }
}
