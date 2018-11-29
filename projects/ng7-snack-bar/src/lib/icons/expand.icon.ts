import { Component, OnInit } from '@angular/core';
import { faAngleDown, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'sb-expand-icon',
    template: '<fa-icon [icon]="faAngleDown"></fa-icon>',
})
export class ExpandIconComponent implements OnInit {
    public faAngleDown: IconDefinition = faAngleDown;
    constructor() { }

    ngOnInit(): void { }
}
