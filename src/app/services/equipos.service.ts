import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {
  private apiUrl = 'http://localhost:3000/api/equipos'; 

  constructor(private http: HttpClient) {}

    getEquipos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
