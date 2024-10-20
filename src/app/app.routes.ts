import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';

export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'iniciar-sesion', component: IniciarSesionComponent },
    { path: '**' , redirectTo: '' }
];
