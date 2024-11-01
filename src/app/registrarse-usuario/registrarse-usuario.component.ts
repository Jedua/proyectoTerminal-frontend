import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistroService } from '../services/registro.service';
import { Router } from '@angular/router';  // Importa Router

@Component({
  selector: 'app-registrarse-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registrarse-usuario.component.html',
  styleUrls: ['./registrarse-usuario.component.css']
})
export class RegistrarseUsuarioComponent {
  user = {
    nombre: '',
    apellidos: '',
    correo: '',
    direccion: '',
    telefono: '',
    fecha_nacimiento: '',
    sexo: '',
    usuario: '',
    pass: '',
    validar_contrasena: ''
  };

  errorMessage = '';
  passwordsMatch = true;

  constructor(private registroService: RegistroService, private router: Router) {}  // Inyecta Router

  // Método para verificar si las contraseñas coinciden
  checkPasswordsMatch(): void {
    this.passwordsMatch = this.user.pass === this.user.validar_contrasena;
    this.errorMessage = this.passwordsMatch ? '' : 'Las contraseñas no coinciden';
  }

  onSubmit(): void {
    if (!this.passwordsMatch) {
      return;
    }

    const { validar_contrasena, ...userData } = this.user;

    this.registroService.registrarUsuario(userData).subscribe(
      (response) => {
        console.log('Usuario registrado exitosamente', response);
        this.errorMessage = '';
        window.alert('Registro exitoso. Ahora puedes iniciar sesión.');

        // Redireccionar al inicio de sesión
        this.router.navigate(['/iniciar-sesion']);
      },
      (error) => {
        console.error('Error al registrar usuario ', error);
        this.errorMessage = 'Error al registrar usuario. Inténtalo nuevamente.';
      }
    );
  }
}
