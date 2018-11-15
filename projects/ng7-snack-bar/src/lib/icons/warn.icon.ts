import { Component, OnInit } from '@angular/core';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'sb-warn-icon',
    template: '<fa-icon [icon]="faExclamationTriangle"></fa-icon>',
})
export class WarnIconComponent implements OnInit {
    faExclamationTriangle = faExclamationTriangle;
    constructor() { }

    ngOnInit(): void { }
}
