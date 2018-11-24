import { Component, OnInit } from '@angular/core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'sb-square-icon',
    template: '<fa-icon [icon]="faCircle"></fa-icon>',
})
export class SquareIconComponent implements OnInit {
  faCircle = faCircle;
    constructor() { }

    ngOnInit(): void { }
}
