import {
    Component,
} from '@angular/core';

import {
    PoMenuItem,
} from '@po-ui/ng-components';

// eslint-disable-next-line new-cap
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

// eslint-disable-next-line require-jsdoc
export class AppComponent {
    /**
     * Lista de menus
     */
    readonly menus: Array<PoMenuItem> = [
        {
            label: 'Home',
            action: this.onClick.bind(this),
        },
    ];

    /**
     * Ao clicar no menu
     */
    private onClick() {
        alert('Clicked in menu item');
    }
}
