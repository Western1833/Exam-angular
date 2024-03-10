import { Component } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  comment: string = ''; // Variable to store the comment

  onInputChange(event: any) {
    this.comment = event.target.value;
  }

  addComment() {
    this.comment = '';
  }
}
