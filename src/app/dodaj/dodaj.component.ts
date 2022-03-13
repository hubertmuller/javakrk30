import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListaService } from '../lista.service';

@Component({
  selector: 'app-dodaj',
  templateUrl: './dodaj.component.html',
  styleUrls: ['./dodaj.component.scss']
})
export class DodajComponent implements OnInit {

  public forma: FormGroup = new FormGroup({
    imie: new FormControl('', {
      validators: [Validators.minLength(2)],
      updateOn: 'change'
    }),
    nazwisko: new FormControl('', {
      validators: [Validators.minLength(3)],
      updateOn: 'change'
    })
  });

  constructor(private listaService: ListaService) { }

  ngOnInit(): void {
  }

}
