import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IniciarSesionService {
  private apiUrl = 'http://localhost:3000/api/auth'; // Cambia a tu URL de backend

  constructor(private http: HttpClient) {}

  login(credentials: { usuario: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/iniciar-sesion`, credentials);
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
