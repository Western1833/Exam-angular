import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-for-delete-car',
  templateUrl: './popup-for-delete-car.component.html',
  styleUrls: ['./popup-for-delete-car.component.css']
})
export class PopupForDeleteCarComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}
}
