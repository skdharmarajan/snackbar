import { Component, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'sb-expand-icon',
    template: '<fa-icon [icon]="faAngleDown"></fa-icon>',
})
export class ExpandIconComponent implements OnInit {
    faAngleDown = faAngleDown;
    constructor() { }

    ngOnInit(): void { }
}
