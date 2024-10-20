import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistrarseUsuarioComponent } from './registrarse-usuario/registrarse-usuario.component';

export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'iniciar-sesion', component: IniciarSesionComponent },
    { path: 'registrarse', component: RegistrarseUsuarioComponent },
    { path: '**' , redirectTo: '' }
];
