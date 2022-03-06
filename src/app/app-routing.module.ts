import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BladComponent } from './blad/blad.component';
import { DodajComponent } from './dodaj/dodaj.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  {path: 'lista', component: ListaComponent},
  {path: 'dodaj', component: DodajComponent},
  {path: '', redirectTo: '/lista', pathMatch: 'full'},
  {path: '**', component: BladComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
