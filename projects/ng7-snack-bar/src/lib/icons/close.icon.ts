import { Component, OnInit } from '@angular/core';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'sb-close-icon',
    template: '<fa-icon [icon]="faTimes"></fa-icon>',
})
export class CloseIconComponent implements OnInit {
    public faTimes: IconDefinition = faTimes;
    constructor() { }

    ngOnInit(): void { }
}
