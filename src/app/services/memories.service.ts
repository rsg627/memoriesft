import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemoriesService {

  constructor(private http: HttpClient) { }

  getMemoryById(id: any) {
    return this.http.get<any[]>(`${environment.backendUrl}/memories`);
  }
}
