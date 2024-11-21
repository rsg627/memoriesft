import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MemoryDetailComponent } from './components/memory-detail/memory-detail.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'memory/:id', component: MemoryDetailComponent }
];
