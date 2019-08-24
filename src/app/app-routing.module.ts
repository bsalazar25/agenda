import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarioComponent } from './components/calendario/calendario.component';


const routes: Routes = [
  { path: 'calendario', component: CalendarioComponent, canActivate: [] },
  { path: '', component: CalendarioComponent, canActivate: [] },
 
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
