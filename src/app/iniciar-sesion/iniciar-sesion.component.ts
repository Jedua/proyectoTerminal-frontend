import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Asegúrate de importar FormsModule

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Asegúrate de agregar FormsModule aquí
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {
  credentials = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  onSubmit(): void {
    console.log('Formulario enviado', this.credentials);
    this.router.navigate(['/']);
  }
  
}
