import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'sb-close-icon',
    template: '<fa-icon [icon]="faTimes"></fa-icon>',
})
export class CloseIconComponent implements OnInit {
    faTimes = faTimes;
    constructor() { }

    ngOnInit(): void { }
}
