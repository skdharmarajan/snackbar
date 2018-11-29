import { Component, OnInit } from '@angular/core';
import { faCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'sb-square-icon',
    template: '<fa-icon [icon]="faCircle"></fa-icon>',
})
export class SquareIconComponent implements OnInit {
    public faCircle: IconDefinition = faCircle;
    constructor() { }

    ngOnInit(): void { }
}
