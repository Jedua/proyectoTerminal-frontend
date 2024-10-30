import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private baseUrl = 'http://localhost:3000/api'; 

  constructor(private http: HttpClient) {}

  // Método para registrar un nuevo usuario en la tabla persona
  registrarUsuario(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/registro`, userData);
  }
}
