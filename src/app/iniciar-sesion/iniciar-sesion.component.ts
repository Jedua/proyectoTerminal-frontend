import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IniciarSesionService } from '../services/iniciar-sesion.service';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {
  credentials = {
    usuario: '',
    password: ''
  };
  errorMessage = '';

  constructor(private iniciarSesionService: IniciarSesionService, private router: Router) {}

  onSubmit(): void {
    this.iniciarSesionService.login(this.credentials).subscribe(
      (response) => {
        // Guardar el token recibido
        this.iniciarSesionService.saveToken(response.token);
        console.log('Inicio de sesión exitoso', response);
        
        // Redirigir al dashboard
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Error al iniciar sesión', error);
        this.errorMessage = 'Usuario o contraseña incorrectos';
      }
    );
  }
}
