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

  private editCarSubscription: Subscription | undefined;

  constructor(private detailsService: DetailsService, private route: ActivatedRoute, private router: Router) {}

  ngOnDestroy(): void {
    this.editCarSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];

      if (this.editCarSubscription) {
        this.editCarSubscription.unsubscribe();
      }
      
      this.editCarSubscription = this.detailsService.carDetails(id).subscribe(res => {
        this.carDetails = res;
      })
    })
  }

  onSubmit(): void {
    if(this.carDetails?.price! <= 0 || this.carDetails?.phoneNumber! <= 0){
      throw new Error("Price or phone number can't be negative numbers!");
    }
     this.editCarSubscription =  this.route.params.subscribe(params => {
      const id = params['id'];
      this.detailsService.edit(id, this.carDetails!).subscribe(() => {
        this.router.navigateByUrl(`details/${id}`);
      })
    })
  }
}
