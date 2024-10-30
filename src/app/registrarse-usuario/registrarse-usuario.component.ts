import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistroService } from '../services/registro.service';

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

  constructor(private registroService: RegistroService) {}

  // Método para verificar si las contraseñas coinciden
  checkPasswordsMatch(): void {
    this.passwordsMatch = this.user.pass === this.user.validar_contrasena;
    this.errorMessage = this.passwordsMatch ? '' : 'Las contraseñas no coinciden';
  }

  onSubmit(): void {
    if (!this.passwordsMatch) {
      return;
    }

    // Excluir 'validar_contrasena' antes de enviar al backend
    const { validar_contrasena, ...userData } = this.user;

    this.registroService.registrarUsuario(userData).subscribe(
      (response) => {
        console.log('Usuario registrado exitosamente', response);
        this.errorMessage = ''; // Limpia el mensaje de error si se registra con éxito
      },
      (error) => {
        console.error('Error al registrar usuario', error);
        this.errorMessage = 'Error al registrar usuario. Inténtalo nuevamente.';
      }
    );
  }
}
