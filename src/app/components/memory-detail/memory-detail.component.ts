import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MemoriesService } from '../../services/memories.service';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-memory-detail',
  imports: [MatCardModule,MatIconModule,CommonModule,RouterModule,CommentComponent],
  templateUrl: './memory-detail.component.html',
  styleUrl: './memory-detail.component.css'
})
export class MemoryDetailComponent implements OnInit {
   id: any;
item:any;
  constructor(private route: ActivatedRoute,public memoriesService:MemoriesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("ID",this.id);
    this.memoriesService.getMemoryById(this.id).subscribe(data => {
      this.item = data;
      console.log("abita",this.item);
    });
  }
}
