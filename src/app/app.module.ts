import {
    NgModule,
} from '@angular/core';

import {
    BrowserModule,
} from '@angular/platform-browser';

import {
    RouterModule,
} from '@angular/router';

import {
    PoModule,
} from '@po-ui/ng-components';

import {
    PoTemplatesModule,
} from '@po-ui/ng-templates';

import {
    AppComponent,
} from './app.component';

import {
    HomeComponent,
} from './pages/home/home.component';

// eslint-disable-next-line new-cap
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        PoModule,
        RouterModule.forRoot([]),
        PoTemplatesModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})

// eslint-disable-next-line require-jsdoc
export class AppModule { }
