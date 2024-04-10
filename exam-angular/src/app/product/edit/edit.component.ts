import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DetailsService } from 'src/app/services/details.service';
import { Car } from 'src/interfaces/car.interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy{
  carDetails: Car | undefined;

  carModels: string[] = [];

  private editCarSubscription: Subscription | undefined;

  constructor(private detailsService: DetailsService, private route: ActivatedRoute, private router: Router) {}

  ngOnDestroy(): void {
    this.editCarSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];

      setTimeout(() => {
        this.updateModels(this.carDetails?.brand!);
      }, 500);


      if (this.editCarSubscription) {
        this.editCarSubscription.unsubscribe();
      }
      
      this.editCarSubscription = this.detailsService.carDetails(id).subscribe(res => {
        this.carDetails = res;
      })
    })
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

  onSubmit(): void {
    if(this.carDetails?.price! <= 0 || this.carDetails?.phoneNumber! <= 0){
      throw new Error("Price or phone number can't be negative numbers!");
    }

    if(!this.carDetails?.brand || !this.carDetails?.imageUrl || !this.carDetails?.model || !this.carDetails?.phoneNumber || !this.carDetails?.description || !this.carDetails?.price || !this.carDetails?.year){
      throw new Error('All fields are required!');
    }

     this.editCarSubscription =  this.route.params.subscribe(params => {
      const id = params['id'];
      this.detailsService.edit(id, this.carDetails!).subscribe(() => {
        this.router.navigateByUrl(`/data/details/${id}`);
      })
    })
  }
}
