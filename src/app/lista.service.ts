import { Injectable } from '@angular/core';
import { Czlowiek } from './interface/czlowiek';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListaService {



  constructor(private http: HttpClient) { }

  getLudzie(): Observable<Czlowiek[]> {
    const myHeaders = new HttpHeaders();
    myHeaders.append('Accept', 'application/json');
    return this.http.get<Czlowiek[]>(environment.endpointURL+'/lista', {
      headers: myHeaders
    });
  }

  deleteCzlowiek(id: number): Observable<any> {
    const myHeaders = new HttpHeaders();
    myHeaders.append('Accept', 'application/json');
    return this.http.delete<any>(environment.endpointURL+'/czlowiek/'+id, {
      headers: myHeaders
    });
  }

  addCzlowiek(czlowiek: Czlowiek): Observable<any> {
    const myHeaders = new HttpHeaders();
    myHeaders.append('Accept', 'application/json');
    return this.http.post<any>(environment.endpointURL+'/czlowiek', czlowiek, {
      headers: myHeaders
    });
  }
}
