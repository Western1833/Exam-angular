import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from 'src/app/services/details.service';
import { Car } from 'src/interfaces/car.interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  carDetails: Car | undefined;
  updatedCar: Car | undefined;

  constructor(private detailsService: DetailsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.detailsService.carDetails(id).subscribe(res => {
        this.carDetails = res;
      })
    })
  }
}
