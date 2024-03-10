import { Component, HostListener, ElementRef} from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  showPopup: boolean = false;

  constructor(private elementRef: ElementRef) {}

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: any) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.showPopup = false; // Hide the popup if the click is outside of it or on the likes button
    }
  }

}
