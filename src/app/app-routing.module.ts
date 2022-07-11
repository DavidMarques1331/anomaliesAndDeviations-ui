import {
    NgModule,
} from '@angular/core';

import {
    Routes,
    RouterModule,
} from '@angular/router';

import {
    HomeComponent,
} from './pages/home/home.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full',
    },
];

// eslint-disable-next-line new-cap
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

// eslint-disable-next-line require-jsdoc
export class AppRoutingModule { }
