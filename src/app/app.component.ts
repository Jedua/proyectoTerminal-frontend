import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';  // Importa tu componente navbar
import { RegistrarseUsuarioComponent } from './registrarse-usuario/registrarse-usuario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, RegistrarseUsuarioComponent],  // Asegúrate de importar el NavbarComponent aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-terminal';
}
