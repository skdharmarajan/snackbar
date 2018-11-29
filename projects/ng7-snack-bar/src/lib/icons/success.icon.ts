import { Component, OnInit } from '@angular/core';
import { faCheckCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'sb-success-icon',
    template: '<fa-icon [icon]="faCheckCircle"></fa-icon>',
})
export class SuccessIconComponent implements OnInit {
    public faCheckCircle: IconDefinition = faCheckCircle;
    constructor() { }

    ngOnInit(): void { }
}
