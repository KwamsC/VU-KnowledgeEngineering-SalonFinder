import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalonsComponent } from './salons/salons.component';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', redirectTo: 'salons', pathMatch: 'full' },
  { path: 'salons', component: SalonsComponent }
  // { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
