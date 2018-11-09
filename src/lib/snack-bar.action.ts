import { Action } from '@ngrx/store';
import { BarType } from './snack-bar.enum';
import { ISnackBar, ISnackBarOptions } from './snack-bar.model';

export enum SnackBarType {
    SHOW_SNACKBAR = 'SHOW_SNACKBAR',
    SET_SNACKBAR_IOPTIONS = 'SET_SNACKBAR_IOPTIONS',
    REMOVE_SNACKBAR_ON_CLOSE = 'REMOVE_SNACKBAR_ON_CLOSE',
    CLEAR_SNACKBAR = 'CLEAR_SNACKBAR',
    SET_CURRENT_URL = 'SET_CURRENT_URL',
}

export class ShowSnackBarAction implements Action {
    readonly type = SnackBarType.SHOW_SNACKBAR;
    constructor(public title: string, public content: string, public detail: string, public barType: BarType) { }
}

export class SetSnackBarOptionsAction implements Action {
    readonly type = SnackBarType.SET_SNACKBAR_IOPTIONS;
    constructor(public payload: ISnackBarOptions) { }
}

export class RemoveSnackBarOnCloseAction implements Action {
    readonly type = SnackBarType.REMOVE_SNACKBAR_ON_CLOSE;
    constructor(public payload: ISnackBar) { }
}

export class ClearSnackBarAction implements Action {
    readonly type = SnackBarType.CLEAR_SNACKBAR;
    constructor() { }
}

export class SetCurrentUrlAction implements Action {
    readonly type = SnackBarType.SET_CURRENT_URL;
    constructor(public payload: string) { }
}

export type SnackBarAction =
    ShowSnackBarAction
    | SetSnackBarOptionsAction
    | RemoveSnackBarOnCloseAction
    | ClearSnackBarAction
    | SetCurrentUrlAction;
