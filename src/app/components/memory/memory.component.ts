import { Component, Input } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-memory',
  imports: [MatCardModule,MatIconModule,MatIconButton,RouterModule],
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
