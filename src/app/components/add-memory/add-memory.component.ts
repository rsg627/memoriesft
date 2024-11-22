import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { CommentComponent } from '../comment/comment.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { HttpClient } from '@angular/common/http';
//import data from '../../../../../../../../Downloads/data2.json';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-add-memory',
  imports: [MatCardModule, MatIconModule, MatSelectModule, CommonModule, MatStepperModule, RouterModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-memory.component.html',
  styleUrl: './add-memory.component.css'
})
export class AddMemoryComponent {

  constructor(private http: HttpClient, private router: Router) { }
  form = new FormGroup({
    type: new FormControl('DEAD'),
    title: new FormControl('In Memory Of'),
    subtitle: new FormControl('1995-2025'),
    description: new FormControl('the best colleague'),
    message: new FormControl('The best friend'),
    //Employee
  });
  form2 = new FormGroup({
    img: new FormControl('https://imgs.search.brave.com/ROZFJKh1AhUKhj3rKTwVFOpl5jd9gdpwD2sTlXYUy0c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9lYXN5/Y2RuLmVzLzEvcG9r/ZS9pL3Bva2VkZXgv/a2VuL2dzLzE1NS5w/bmc'),

    name: new FormControl('Robert Min'),
    birthday: new FormControl('1998-12-12'),
    death: new FormControl('2025-12-12'),

    employeId: new FormControl('45789555'),
    role: new FormControl('Tech Lead'),
    country: new FormControl('UK'),
    gbgf: new FormControl('WPB'),
    seniority: new FormControl('12')
  });
  addMemory() {
    let memory = {
      "id": {
        "timestamp": new Date().getTime(),
        "date": new Date().toISOString()
      },
      "type": this.form.get('type')?.value,
      "title": this.form.get('title')?.value,
      "subtitle": this.form.get('subtitle')?.value,
      "description": this.form.get('description')?.value,
      "message": this.form.get('message')?.value,
      "likes": 0,
      "employee": this.form2.value,
      "comments": []
    }
    /* this.http.get('/assets/students.json').subscribe((res: any) => {
     console.log("00000000",res)
    });
   fetch('../../data2.json')
    .then((res) => res.json())
    .then((json) => {
      console.log(".............",json);
     // this.studentData = json;
    });*/
    /*let tmp: any = data;
    console.log(data);
    tmp.memories.push(memory);
    tmp[memory.id.timestamp] = memory;
    console.log(tmp);
    // npm install --save-dev @types/file-saver
    const blob = new Blob([JSON.stringify(tmp, null, 2)], { type: 'application/json' });
    saveAs(blob, 'data2.json');
    */
    this.router.navigate(['/home']);
  }
}
