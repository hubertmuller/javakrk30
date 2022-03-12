import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usun',
  templateUrl: './usun.component.html',
  styleUrls: ['./usun.component.scss']
})
export class UsunComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 

    this.route.params.subscribe( (params) => {
      const toDelete = params['id'];
      //servis Lista i jego metoda delete
      console.log('chcemy usunac id=' + toDelete);
    });
  }

  ngOnInit(): void {
  }

}
