import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registrarse-usuario.component.html',
  styleUrls: ['./registrarse-usuario.component.css']
})
export class RegistrarseUsuarioComponent {
  user = {
    tipoUsuario: '',
    nombre: '',
    apellidos: '',
    correo: '',
    fecha_nacimiento: '',
    direccion: '',
    telefono: '',
    categoria: '',  // Solo para delegado
    equipo: '',     // Solo para jugador
    contrasena: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Datos del usuario:', this.user);

    // Aquí puedes hacer la llamada al servicio para registrar el usuario según su tipo
    // Ejemplo:
    if (this.user.tipoUsuario === 'jugador') {
      // Lógica para registrar un jugador
      console.log('Registrando Jugador:', this.user);
    } else if (this.user.tipoUsuario === 'delegado') {
      // Lógica para registrar un delegado
      console.log('Registrando Delegado:', this.user);
    }

    // Redireccionar después de registrar
    // this.router.navigate(['/']);
  }
}
