import {
  trigger,
  transition,
  style,
  animate,
  query,
  group,
  animateChild,
  AnimationTriggerMetadata
} from '@angular/animations';

export const ACCORDION_ANIMATION: AnimationTriggerMetadata = trigger('showContentTrigger', [
    transition(':enter', [
        query('*', style({ opacity: 0 })),
        style({ height: '0' }),
        animate('.2s', style({ height: '*' })),
        query('*', animate('1ms', style({ opacity: 1 }))),
        animateChild()
    ]),
    transition(':leave', [
        query('*', style({ opacity: 0 })),
        animate('.2s', style({ height: '0' })),
        animateChild()
    ]),
]);

export const SHOW_OR_HIDE_BAR_ANIMATION_FADE_IN: AnimationTriggerMetadata = trigger('insertRemoveTrigger', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('.5s', style({ opacity: 1 }))
    ]),
    transition(':leave', [
        animate('.5s', style({ opacity: 0 }))
    ]),
]);

