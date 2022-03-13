import { Component, OnInit } from '@angular/core';
import { ListaService } from '../lista.service';

@Component({
  selector: 'app-dodaj',
  templateUrl: './dodaj.component.html',
  styleUrls: ['./dodaj.component.scss']
})
export class DodajComponent implements OnInit {

  constructor(private listaService: ListaService) { }

  ngOnInit(): void {
  }

}
