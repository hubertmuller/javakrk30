import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edytuj',
  templateUrl: './edytuj.component.html',
  styleUrls: ['./edytuj.component.scss']
})
export class EdytujComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 

    this.route.params.subscribe( (params) => {
      const toEdit = params['id'];
      //servis Lista i jego metoda edit
      console.log('chcemy edytowac id=' + toEdit);
    });
  }

  ngOnInit(): void {
  }

}
