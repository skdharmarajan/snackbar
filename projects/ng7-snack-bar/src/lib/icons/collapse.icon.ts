import { Component, OnInit } from '@angular/core';
import { faAngleUp, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'sb-collapse-icon',
    template: '<fa-icon [icon]="faAngleUp"></fa-icon>',
})
export class CollapseIconComponent implements OnInit {
    public faAngleUp: IconDefinition = faAngleUp;
    constructor() { }

    ngOnInit(): void { }
}
