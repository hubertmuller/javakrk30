import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaglowekComponent } from './naglowek/naglowek.component';
import { StopkaComponent } from './stopka/stopka.component';
import { DodajComponent } from './dodaj/dodaj.component';
import { ListaComponent } from './lista/lista.component';
import { BladComponent } from './blad/blad.component';
import { NawigacjaComponent } from './nawigacja/nawigacja.component';

@NgModule({
  declarations: [
    AppComponent,
    NaglowekComponent,
    StopkaComponent,
    DodajComponent,
    ListaComponent,
    BladComponent,
    NawigacjaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    NaglowekComponent,
    StopkaComponent
  ]
})
export class AppModule { 

}
