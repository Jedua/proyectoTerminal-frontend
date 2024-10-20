import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://api.lionleague.com/auth';  // Cambia la URL al endpoint de tu API

  constructor(private http: HttpClient) {}

  // Método para iniciar sesión, envía las credenciales al backend
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // Guardar el token en el localStorage (o sessionStorage según sea necesario)
  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Obtener el token del localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Cerrar sesión (remover el token del localStorage)
  logout(): void {
    localStorage.removeItem('token');
  }
}
