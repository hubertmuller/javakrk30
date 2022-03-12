import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  public lista = [
  {
    imie: "Adam",
    nazwisko: "Kowalski",
    wiek: 50,
    plec: "m"
  },
  {
    imie: "Anna",
    nazwisko: "Nowak",
    wiek: 55,
    plec: "k"
  }];

  constructor() { }

  ngOnInit(): void {
    /** */
  }

}
