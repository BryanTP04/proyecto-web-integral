import { Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login/login.component'; // 👈 Asegúrate de que esta ruta sea correcta

export const routes: Routes = [
    { path: '', component: LoginComponent },
];
