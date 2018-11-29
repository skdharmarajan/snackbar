import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ISnackBarOptions, ISnackBarState } from '../snack-bar.model';
import { SnackBarService } from '../snack-bar.service';

import { filter } from 'rxjs/operators';
import { SHOW_OR_HIDE_BAR_ANIMATION_FADE_IN } from '../animations/animations';
import {SnackBarType} from "../snack-bar.enum";

@Component({
    selector: 'sb-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.scss'],
    animations: [
        SHOW_OR_HIDE_BAR_ANIMATION_FADE_IN,
    ],
})
export class ContainerComponent implements OnInit, OnDestroy {
    public snackBarOptions: ISnackBarOptions;
    private routeSubscription: Subscription;
    constructor(
        public snackBarService: SnackBarService,
        private router: Router,
        private store$: Store<ISnackBarState>,
    ) {
        this.snackBarOptions = this.snackBarService.getSnackBarOptions;
    }

    ngOnInit(): void {
        this.letsAutoCloseOnTransition();
    }

    ngOnDestroy(): void {
        if (!this.routeSubscription) { return; }
        this.routeSubscription.unsubscribe();
    }

    private letsAutoCloseOnTransition(): void {
        if (!this.snackBarOptions.autoCloseOnTransition) { return; }

        this.routeSubscription = this.router.events.pipe(
            filter((e) => e instanceof NavigationEnd)
        ).subscribe((e: NavigationEnd) => {
            if (this.snackBarService.currentUrl !== e.url) {
                this.store$.dispatch({ type: SnackBarType.CLEAR_SNACKBAR });
            }
            this.store$.dispatch({ type: SnackBarType.SET_CURRENT_URL, payload: e.url });
        });
    }
}
