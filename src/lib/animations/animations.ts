import { trigger, transition, style, animate, query, group, animateChild } from '@angular/animations';

export const ACCORDION_ANIMATION = trigger('showContentTrigger', [
    transition(':enter', [
        style({ height: '0' }),
        animate('.2s', style({ height: '*' }))
    ]),
    transition(':leave', [
        animate('.2s', style({ height: '0' }))
    ]),
]);

export const SHOW_OR_HIDE_BAR_ANIMATION_FADE_IN = trigger('insertRemoveTrigger', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('.5s', style({ opacity: 1 }))
    ]),
    transition(':leave', [
        animate('.5s', style({ opacity: 0 }))
    ]),
]);

export const ROUTE_ANIMATION = trigger('routeAnimation', [
    transition('* <=> *', [
        group([
            query(':enter', [
                style({ opacity: 0 }),
                animate('0.5s', style({ opacity: 1 })),
                animateChild()
            ]),
            query(':leave', [
                animate('0.5s', style({ opacity: 0 })),
                animateChild()
            ])
        ])
    ]),
]);

