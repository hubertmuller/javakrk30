import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaService } from '../lista.service';

@Component({
  selector: 'app-usun',
  templateUrl: './usun.component.html',
  styleUrls: ['./usun.component.scss']
})
export class UsunComponent implements OnInit {

  public zaladowano = false;
  public blad = false;
  public toDelete = 0;

  constructor(private route: ActivatedRoute, private listaService: ListaService) { 

    this.route.params.subscribe( (params) => {
      this.toDelete = params['id'];
      //servis Lista i jego metoda delete
      console.log('chcemy usunac id=' + this.toDelete);
      this.listaService.deleteCzlowiek(this.toDelete).subscribe( 
        (_) => {
          console.log('udalo sie usunac id=' + this.toDelete);
          this.zaladowano = true;
        },
        (_) => {
          console.log('blad przy usuwaniu');
          this.blad = true;
        }
      );
    });
  }

  ngOnInit(): void {
  }

}
