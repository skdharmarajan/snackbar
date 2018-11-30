import { Action } from '@ngrx/store';
import { BarType } from './snack-bar.enum';
import {ISnackBar, ISnackBarAction, ISnackBarOptions, ISnackBarConfig} from './snack-bar.model';

export class ShowSnackBarAction implements Action {
    readonly type = 'SHOW_SNACKBAR';
    constructor(public title: string, public content: string, public detail: string, public barType: BarType,
                public actions: ISnackBarAction[], public options: ISnackBarConfig) { }
}

export class SetSnackBarOptionsAction implements Action {
    readonly type = 'SET_SNACKBAR_IOPTIONS';
    constructor(public payload: ISnackBarOptions) { }
}

export class RemoveSnackBarOnCloseAction implements Action {
    readonly type = 'REMOVE_SNACKBAR_ON_CLOSE';
    constructor(public payload: ISnackBar) { }
}

export class ClearSnackBarAction implements Action {
    readonly type = 'CLEAR_SNACKBAR';
    constructor() { }
}

export class SetCurrentUrlAction implements Action {
    readonly type = 'SET_CURRENT_URL';
    constructor(public payload: string) { }
}

export type SnackBarAction =
    ShowSnackBarAction
    | SetSnackBarOptionsAction
    | RemoveSnackBarOnCloseAction
    | ClearSnackBarAction
    | SetCurrentUrlAction;
