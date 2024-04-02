import { Component } from '@angular/core';

@Component({
  selector: 'app-details-functionalities',
  templateUrl: './details-functionalities.component.html',
  styleUrls: ['./details-functionalities.component.css']
})
export class DetailsFunctionalitiesComponent {
  showPopup: boolean = false;

  togglePopup() {
    this.showPopup = !this.showPopup;
  }
}
