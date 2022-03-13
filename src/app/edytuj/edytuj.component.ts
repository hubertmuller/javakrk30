import { Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DodajComponent } from '../dodaj/dodaj.component';
import { ListaService } from '../lista.service';

@Component({
  selector: 'app-edytuj',
  templateUrl: './../dodaj/dodaj.component.html',
  styleUrls: ['./../dodaj/dodaj.component.scss']
})
export class EdytujComponent extends DodajComponent implements OnInit, OnDestroy {
  public toEdit = 0;

  constructor(private route: ActivatedRoute, public override listaService: ListaService) { 
    super(listaService);
    console.log('konstruktor');
    this.route.params.subscribe( (params) => {
      this.toEdit = params['id'];
      //servis Lista i jego metoda edit
      console.log('chcemy edytowac id=' + this.toEdit);
    });
  }

  override ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  override ngOnInit(): void {
    console.log('ngOnInit');
  }

}
