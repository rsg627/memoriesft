import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-comment',
  imports: [MatCardModule, MatIconModule, MatChipsModule, DatePipe, CommonModule,MatBadgeModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  @Input() item!: any;
  constructor() {
  }
  addLike(value: any) {
    value.likes += 1;
    console.log(value.likes);
  }
}
