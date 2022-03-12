import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaService } from '../lista.service';

@Component({
  selector: 'app-usun',
  templateUrl: './usun.component.html',
  styleUrls: ['./usun.component.scss']
})
export class UsunComponent implements OnInit {

  constructor(private route: ActivatedRoute, private listaService: ListaService) { 

    this.route.params.subscribe( (params) => {
      const toDelete = params['id'];
      //servis Lista i jego metoda delete
      console.log('chcemy usunac id=' + toDelete);
      this.listaService.deleteCzlowiek(toDelete).subscribe( 
        (_) => {
          console.log('udalo sie usunac id=' + toDelete);
        }
      );
    });
  }

  ngOnInit(): void {
  }

}
