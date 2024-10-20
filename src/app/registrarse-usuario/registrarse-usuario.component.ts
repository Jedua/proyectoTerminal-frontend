import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-registrarse-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registrarse-usuario.component.html',
  styleUrls: ['./registrarse-usuario.component.css']
})
export class RegistrarseUsuarioComponent implements OnInit {
  user = {
    tipoUsuario: '',
    nombre: '',
    apellidos: '',
    fecha_nacimiento: '',
    direccion: '',
    telefono: '',
    correo: '',
    contrasena: '',
    nombre_equipo: '',
    categoria: '',
    sexo: '',
    equipo: ''
  };

  tiposUsuario = ['jugador', 'delegado'];
  categorias: any[] = []; // Aquí se guardarán las categorías obtenidas del backend

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(
      (data) => {
        this.categorias = data;
      },
      (error) => {
        console.error('Error al obtener las categorías', error);
      }
    );
  }

  onSubmit(): void {
    console.log('Formulario enviado', this.user);
    // Lógica adicional para manejar el registro del usuario
  }
}
