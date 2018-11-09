import { Component, OnInit } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'sb-info-icon',
    template: '<fa-icon [icon]="faInfoCircle"></fa-icon>',
})
export class InfoIconComponent implements OnInit {
    faInfoCircle = faInfoCircle;
    constructor() { }

    ngOnInit(): void { }
}
