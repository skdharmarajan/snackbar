import { Component, OnInit } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'sb-success-icon',
    template: '<fa-icon [icon]="faCheckCircle"></fa-icon>',
})
export class SuccessIconComponent implements OnInit {
    faCheckCircle = faCheckCircle;
    constructor() { }

    ngOnInit(): void { }
}
