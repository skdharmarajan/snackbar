import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import {BarType, SnackBarType} from './snack-bar.enum';
import {
  INITIAL_ISNACKBAR_OPTIONS,
  ISNACKBAR_OPTIONS,
  ISnackBarAction,
  ISnackBarOptions,
  ISnackBarState
} from './snack-bar.model';

const TIMEOUT = 100;

@Injectable()
export class SnackBarService {
    constructor(
        @Inject(ISNACKBAR_OPTIONS) private snackBarOptions: ISnackBarOptions,
        private store$: Store<any>,
    ) {
        this.config();
    }

  /**
   * Displays the info snack bar.
   * @param title
   * @param content
   * @param detail
   * @param actions - cannot be more than 3 actions.
   */
    public info(title: string, content: string, detail?: string, actions?: ISnackBarAction[]): void {
        this.setTimeOutOnEvents(TIMEOUT,
            () => this.store$.dispatch({
              type: SnackBarType.SHOW_SNACKBAR, title, content, detail, barType: BarType.INFO,
              actions,
            }));
    }

  /**
   * Displays the success snack bar.
   * @param title
   * @param content
   * @param detail
   * @param actions - cannot be more than 3 actions.
   */
    public success(title: string, content: string, detail?: string, actions?: ISnackBarAction[]): void {
        this.setTimeOutOnEvents(TIMEOUT,
            () => this.store$.dispatch({
              type: SnackBarType.SHOW_SNACKBAR, title, content, detail, barType: BarType.SUCCESS,
              actions,
            }));
    }

  /**
   * Displays the warn snack bar.
   * @param title
   * @param content
   * @param detail
   * @param actions - cannot be more than 3 actions.
   */
    public warn(title: string, content: string, detail?: string, actions?: ISnackBarAction[]): void {
        this.setTimeOutOnEvents(TIMEOUT,
            () => this.store$.dispatch({
              type: SnackBarType.SHOW_SNACKBAR, title, content, detail, barType: BarType.WARN,
              actions,
            }));
    }

  /**
   * Displays the error snack bar.
   * @param title
   * @param content
   * @param detail
   * @param actions - cannot be more than 3 actions.
   */
    public error(title: string, content: string, detail?: string, actions?: ISnackBarAction[]): void {
        this.setTimeOutOnEvents(TIMEOUT,
            () => this.store$.dispatch({
              type: SnackBarType.SHOW_SNACKBAR, title, content, detail, barType: BarType.ERROR,
              actions,
            }));
    }

  /**
   * Clears all the snack bars.
   */
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
