import { Injectable } from '@angular/core';
import { Czlowiek } from './interface/czlowiek';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaService {



  constructor(private http: HttpClient) { }

  getLudzie(): Observable<Czlowiek[]> {
    const myHeaders = new HttpHeaders();
    myHeaders.append('Accept', 'application/json');
    return this.http.get<Czlowiek[]>('http://localhost:3200/lista', {
      headers: myHeaders
    });
  }

  deleteCzlowiek(id: number): Observable<any> {
    const myHeaders = new HttpHeaders();
    myHeaders.append('Accept', 'application/json');
    return this.http.delete<any>('http://localhost:3200/czlowiek/'+id, {
      headers: myHeaders
    });
  }

  addCzlowiek(czlowiek: Czlowiek): Observable<any> {
    const myHeaders = new HttpHeaders();
    myHeaders.append('Accept', 'application/json');
    return this.http.post<any>('http://localhost:3200/czlowiek', czlowiek, {
      headers: myHeaders
    });
  }
}
