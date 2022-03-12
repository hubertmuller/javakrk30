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
  public zaladowano = false;
  public blad = false;

  constructor(private listaService: ListaService) { 
    listaService.getLudzie().subscribe(
      (ludzie) => {
        console.log('przyszly dane');
        this.zaladowano = true;
        this.lista = ludzie;
      },
      (error) => {
        this.blad = true;
      }
    );
  }

  ngOnInit(): void {
    /** */
  }

}
