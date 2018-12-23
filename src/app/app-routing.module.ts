import { WerComponent } from './wer/wer.component';
import { WasComponent } from './was/was.component';
import { WiesoComponent } from './wieso/wieso.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WieComponent } from './wie/wie.component';

const routes: Routes = [
  { path: '',  redirectTo: '/', pathMatch: 'full' },
  { path: 'wieso', component: WiesoComponent },
  { path: 'wie', component: WieComponent },
  { path: 'was', component: WasComponent },
  { path: 'wer', component: WerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
