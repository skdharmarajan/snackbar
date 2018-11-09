import { Component, OnInit } from '@angular/core';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'sb-square-icon',
    template: '<fa-icon [icon]="faSquare"></fa-icon>',
})
export class SquareIconComponent implements OnInit {
    faSquare = faSquare;
    constructor() { }

    ngOnInit(): void { }
}
