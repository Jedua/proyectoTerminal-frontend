import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  // Importar RouterModule para las rutas

// Importar los componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavegacionComponent } from './inicio/navegacion/navegacion.component';

// Importar las rutas
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,          // El componente raíz de la aplicación
    InicioComponent,       // Tu componente de inicio
    NavegacionComponent    // El componente de navegación
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)  // Configurar el enrutamiento con las rutas
  ],
  providers: [],
  bootstrap: [AppComponent]  // Arrancar la aplicación con AppComponent
})
export class AppModule { }
