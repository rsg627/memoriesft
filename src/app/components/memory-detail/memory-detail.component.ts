import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MemoriesService } from '../../services/memories.service';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { CommentComponent } from '../comment/comment.component';
import { matFormFieldAnimations, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-memory-detail',
  imports: [MatCardModule, MatIconModule, CommonModule, RouterModule, CommentComponent, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './memory-detail.component.html',
  styleUrl: './memory-detail.component.css'
})
export class MemoryDetailComponent implements OnInit {
  id: any;
  item: any;

  formGroup = new FormGroup({
    name: new FormControl(''),
    message: new FormControl(''),
    url: new FormControl('')
  });
  constructor(private route: ActivatedRoute, public memoriesService: MemoriesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("ID", this.id);
    this.memoriesService.getMemoryById(this.id).subscribe(data => {
      this.item = data;
      console.log("abita", this.item);
    });
  }
  addComment() {
    if (this.formGroup.get('message')?.value &&this.formGroup.get('name')?.value) {
      let comment = {
        "timestamp": new Date(),
        "id": 12132,
        "employee": this.formGroup.get('name')?.value,
        "img": this.formGroup.get('url')?.value,
        "comment": this.formGroup.get('message')?.value,
        "likes": 0
      }
      this.item.comments.push(comment);
      this.formGroup.reset();
      console.log("hola", this.item.comments);
    }
  }
  addLike() {

  }
}
