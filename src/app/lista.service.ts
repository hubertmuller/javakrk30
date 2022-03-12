import { Injectable } from '@angular/core';
import { Czlowiek } from './interface/czlowiek';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor() { }

  getLudzie(): Czlowiek[] {
    return [
      {
        id: 1,
        imie: "Adam",
        nazwisko: "Kowalski",
        wiek: 50,
        plec: "m"
      },
      {
        id: 3,
        imie: "Anna",
        nazwisko: "Nowak",
        wiek: 55,
        plec: "k"
      }];
  }
}
