import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { GraphsComponent } from './pages/graphs/graphs.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UsersComponent } from './pages/users/users.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { RegisterProductComponent } from './pages/register-product/register-product.component';

const AppRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent},
            { path: 'graph', component: GraphsComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'users', component: UsersComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'registerProduct', component: RegisterProductComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(AppRoutes, {useHash: true} );
