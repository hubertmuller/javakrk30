import { Component, OnInit } from '@angular/core';
import { Czlowiek } from '../interface/czlowiek';
import { ListaService } from '../lista.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  public lista: Czlowiek[] = [];

  constructor(private listaService: ListaService) { 
    listaService.getLudzie().subscribe(
      (ludzie) => {
        this.lista = ludzie;
      }
    );
  }

  ngOnInit(): void {
    /** */
  }

}
