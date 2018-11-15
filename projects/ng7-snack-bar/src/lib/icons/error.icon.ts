import { Component, OnInit } from '@angular/core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'sb-error-icon',
    template: '<fa-icon [icon]="faTimesCircle"></fa-icon>',
})
export class ErrorIconComponent implements OnInit {
    faTimesCircle = faTimesCircle;
    constructor() { }

    ngOnInit(): void { }
}
