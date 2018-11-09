import { Inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { SnackBarType } from './snack-bar.action';
import { BarType } from './snack-bar.enum';
import { INITIAL_ISNACKBAR_OPTIONS, ISNACKBAR_OPTIONS, ISnackBarOptions, ISnackBarState } from './snack-bar.model';

const TIMEOUT = 100;

@Injectable()
export class SnackBarService {
    constructor(
        @Inject(ISNACKBAR_OPTIONS) private snackBarOptions: ISnackBarOptions,
        private store$: Store<any>,
        private router: Router,
    ) {
        this.config();
    }

    public info(title: string, content: string, detail?: string): void {
        this.setTimeOutOnEvents(TIMEOUT,
            () => this.store$.dispatch({ type: SnackBarType.SHOW_SNACKBAR, title, content, detail, barType: BarType.INFO }));
    }

    public success(title: string, content: string, detail?: string): void {
        this.setTimeOutOnEvents(TIMEOUT,
            () => this.store$.dispatch({ type: SnackBarType.SHOW_SNACKBAR, title, content, detail, barType: BarType.SUCCESS }));
    }

    public warn(title: string, content: string, detail?: string): void {
        this.setTimeOutOnEvents(TIMEOUT,
            () => this.store$.dispatch({ type: SnackBarType.SHOW_SNACKBAR, title, content, detail, barType: BarType.WARN }));
    }

    public error(title: string, content: string, detail?: string): void {
        this.setTimeOutOnEvents(TIMEOUT,
            () => this.store$.dispatch({ type: SnackBarType.SHOW_SNACKBAR, title, content, detail, barType: BarType.ERROR }));
    }

    public clearAll(): void {
        this.store$.dispatch({ type: SnackBarType.CLEAR_SNACKBAR });
    }

    /**
     * Get the state of snack bar.
     */
    get snackBarState$(): Observable<ISnackBarState> {
        return this.store$.select((state) => state.snackBarState);
    }

    get getSnackBarOptions(): ISnackBarOptions {
        let snackBarOptions: ISnackBarOptions;
        const snackBarStateSub: Subscription = this.snackBarState$.subscribe((s) => {
            snackBarOptions = s.options;
        });
        snackBarStateSub.unsubscribe();
        return snackBarOptions;
    }

    get currentUrl(): string {
        let url: string;
        const snackBarStateSub: Subscription = this.snackBarState$.subscribe((s) => {
            url = s.currentUrl;
        });
        snackBarStateSub.unsubscribe();
        return url;
    }

    private setTimeOutOnEvents(timeOut: number, callBack: any) {
        setTimeout(() => {
            callBack();
        }, timeOut);
    }

    private config() {
        this.store$.dispatch({
            type: SnackBarType.SET_SNACKBAR_IOPTIONS,
            payload: Object.assign(INITIAL_ISNACKBAR_OPTIONS, this.snackBarOptions),
        });
    }
}
