import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-memory',
  imports: [MatCardModule,MatIconModule,MatIconButton,RouterModule,MatGridListModule,MatBadgeModule,MatChipsModule,CommonModule],
  templateUrl: './memory.component.html',
  styleUrl: './memory.component.css'
})
export class MemoryComponent {
  @Input() item!: any;
  constructor(public router: Router){}
  addLike(value: any) {
    value.likes += 1;
    console.log(value.likes);
  }
}
