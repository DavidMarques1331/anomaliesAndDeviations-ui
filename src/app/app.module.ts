import {
    NgModule,
} from '@angular/core';

import {
    BrowserModule,
} from '@angular/platform-browser';

import {
    AppComponent,
} from './app.component';

import {
    PoModule,
} from '@po-ui/ng-components';

import {
    RouterModule,
} from '@angular/router';

// eslint-disable-next-line new-cap
@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        PoModule,
        RouterModule.forRoot([]),
    ],
    providers: [],
    bootstrap: [AppComponent],
})

/**
 * Módulo principal
 */
export class AppModule { }
