import { Component, OnInit } from '@angular/core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'sb-collapse-icon',
    template: '<fa-icon [icon]="faAngleUp"></fa-icon>',
})
export class CollapseIconComponent implements OnInit {
    faAngleUp = faAngleUp;
    constructor() { }

    ngOnInit(): void { }
}
