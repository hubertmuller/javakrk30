import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edytuj',
  templateUrl: './edytuj.component.html',
  styleUrls: ['./edytuj.component.scss']
})
export class EdytujComponent implements OnInit, OnDestroy, OnChanges {
  public toEdit = 0;

  constructor(private route: ActivatedRoute) { 
    console.log('konstruktor');
    this.route.params.subscribe( (params) => {
      this.toEdit = params['id'];
      //servis Lista i jego metoda edit
      console.log('chcemy edytowac id=' + this.toEdit);
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes')
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

}
