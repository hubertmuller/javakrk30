import { Component, Input, OnInit } from '@angular/core';
import { Linki } from '../interface/linki';

@Component({
  selector: 'app-nawigacja',
  templateUrl: './nawigacja.component.html',
  styleUrls: ['./nawigacja.component.scss', './nawigacja-linki.component.scss']
})
export class NawigacjaComponent implements OnInit {

  @Input()
  public linki: Linki[] = [];

  constructor() { 
    console.log(this.linki);
  }

  ngOnInit(): void {
    console.log(this.linki);
  }

}
