import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RegistrarseUsuarioComponent } from './registrarse-usuario/registrarse-usuario.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard'; // Importa el guard
import { CategoriasComponent } from './categorias/categorias.component';
import { EquiposComponent } from './equipos/equipos.component';
import { HorariosComponent } from './horarios/horarios.component';
import { MultimediaComponent } from './multimedia/multimedia.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'registrarse', component: RegistrarseUsuarioComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'equipos', component: EquiposComponent },
  { path: 'horarios', component: HorariosComponent },
  { path: 'multimedia', component: MultimediaComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, // Protege el dashboard con AuthGuard
  { path: '**', redirectTo: '' },
];
