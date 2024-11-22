import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemoriesService {

  constructor(private http: HttpClient) { }
  getMemoryAll(type: any) {
    return this.http.get<any[]>(`${environment.backendUrl}/${type}`);
  }
  getMemoryById(id: any) {
    return this.http.get<any[]>(`${environment.backendUrl}/${id}`);
  }
}
