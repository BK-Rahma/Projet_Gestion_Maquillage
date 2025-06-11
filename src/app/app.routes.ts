import { Routes } from '@angular/router';
import { AjoutCategoryComponent } from './ajout-category/ajout-category.component';
import { MakeupDashboardComponent } from './makeup-dashboard/makeup-dashboard.component';

export const routes: Routes = [
  { path: 'gestion-category', component: AjoutCategoryComponent },
  { path: 'gestion-makeup', component: MakeupDashboardComponent },
  { path: '', redirectTo: 'gestion-makeup', pathMatch: 'full' }

];
