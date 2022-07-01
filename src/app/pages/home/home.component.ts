import {
    Component,
    OnInit,
} from '@angular/core';

// eslint-disable-next-line new-cap
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})

// eslint-disable-next-line require-jsdoc
export class HomeComponent implements OnInit {
    // eslint-disable-next-line require-jsdoc
    constructor() {
    }

    /**
     * https://angular.io/guide/lifecycle-hooks
     */
    ngOnInit(): void {
    }
}
