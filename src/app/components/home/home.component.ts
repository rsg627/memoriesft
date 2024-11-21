import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {  MatTabsModule } from '@angular/material/tabs';
import { MemoriesService } from '../../services/memories.service';
import { MemoryComponent } from '../memory/memory.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-home',
  imports: [MatTabsModule, MatIconModule,MemoryComponent,AsyncPipe,CommonModule,MatCardModule,MatGridListModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit  {
  items: any[]=[];
  constructor(public memoriesService:MemoriesService){}
  ngOnInit(): void {
    this.memoriesService.getMemoryAll("DEAD").subscribe(data => {
      console.log("abita2",data); 
      this.items = data;
      console.log("abita",this.items);
    });
   
  }
  doAction(item: any, event: any) {
   console.log(item);
  }
}
