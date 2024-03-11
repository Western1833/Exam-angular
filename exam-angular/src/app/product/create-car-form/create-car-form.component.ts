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
    brand: '',
    model: '',
    year: '',
    price: null,
    description: '',
    phoneNumber: '',
    likes: [],
    comments: []
  };

  constructor(private addCarService: AddCarService) {}

  onSubmit() {
    // Validate the form fields
    if (this.isValidCar(this.car)) {
      // Call the service method only if the form is valid
      this.addCarService.addCar(this.car).subscribe({
        next: () => {
          console.log('Car added successfully');
          // Optionally, reset the form or perform other actions after adding the car
        },
        error: (err) => {
          console.error('Error adding car:', err);
        }
      });
    } else {
      console.error('Form is not valid. Please fill in all required fields.');
    }
  }

  // Method to validate the form fields
  private isValidCar(car: Car): boolean {
    // Check if any of the required fields are empty
    return (
      car.brand.trim() !== '' &&
      car.model.trim() !== '' &&
      car.year.trim() !== '' &&
      car.price !== null &&
      car.description.trim() !== '' &&
      car.phoneNumber !== null
    );
  }
}
