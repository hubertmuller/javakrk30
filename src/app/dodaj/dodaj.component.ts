import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ListaService } from '../lista.service';
import { Czlowiek } from './../interface/czlowiek';

@Component({
  selector: 'app-dodaj',
  templateUrl: './dodaj.component.html',
  styleUrls: ['./dodaj.component.scss']
})
export class DodajComponent implements OnInit, OnDestroy {

  public forma: FormGroup = new FormGroup({
    imie: new FormControl('', {
      validators: [Validators.minLength(2), Validators.maxLength(10), Validators.required],
      updateOn: 'blur'
    }),
    nazwisko: new FormControl('', {
      validators: [Validators.minLength(3), Validators.required],
      updateOn: 'change'
    }),
    plec: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change'
    }),
    wiek: new FormControl('', {
      validators: [Validators.min(0), Validators.max(150), Validators.required],
      updateOn: 'change'
    })
  });

  private imieSub: Subscription;

  constructor(private listaService: ListaService) { 

    this.imieSub = this.forma.controls['imie'].valueChanges.subscribe(
      (imie) => {
        console.log('zmienila sie wartosc imienia'+ imie);
        this.forma.controls['plec'].setValue(this.rozpoznajPlec(imie));
      }
    )

  }

  ngOnDestroy(): void {
    this.imieSub.unsubscribe();
  }

  public wyslij(): void {
    const forma = this.forma.controls;
    const czlowiek: Czlowiek = {
      imie: forma['imie'].value, 
      nazwisko: forma['nazwisko'].value, 
      wiek: forma['wiek'].value, 
      plec: forma['plec'].value
    };
    this.listaService.addCzlowiek(czlowiek).subscribe(
      (_) => {
        console.log("udalo sie zapisac");
      },
      (error) => {
        console.log('zapis nieudany');
      }
    );
  }

  private rozpoznajPlec(imie: string): string {
    let plec = "";
    const i = imie.toLowerCase();
    if (i === "adam") {
      plec = 'm';
    }
    if (i === "agata") {
      plec = 'k';
    }
    return plec;
  }

  ngOnInit(): void {
  }

  public kasuj():void {
    this.forma.controls['imie'].setValue('');
    this.forma.controls['nazwisko'].setValue('');
  }

}
