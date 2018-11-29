import { Component, OnInit } from '@angular/core';
import { faInfoCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'sb-info-icon',
    template: '<fa-icon [icon]="faInfoCircle"></fa-icon>',
})
export class InfoIconComponent implements OnInit {
    public faInfoCircle: IconDefinition = faInfoCircle;
    constructor() { }

    ngOnInit(): void { }
}
