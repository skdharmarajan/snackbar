import { InjectionToken } from '@angular/core';
import { BarType, PositionType, TemplateType, GroupRuleType } from './snack-bar.enum';

export interface ISnackBarOptions {
    position?: PositionType;
    maxNoOfSnackBar?: number;
    autoCloseOnTransition?: boolean;
    template?: TemplateType;
    groupRuleType?: GroupRuleType;
    rankBars?: BarType[];
    infoOptions?: IBarOptions;
    successOptions?: IBarOptions;
    warnOptions?: IBarOptions;
    errorOptions?: IBarOptions;
}

export interface IBarOptions {
    isClose?: boolean;
    closeTimeOut?: number;
    isDetail?: boolean;
    panelClass?: string;
    opacity?: number;
}

export interface ISnackBarConfig {
  isBackDrop?: boolean;
}

export interface ISnackBar {
    id: number;
    title: string;
    content: string;
    contents: string[];
    detail: string;
    details: string[];
    type: BarType;
    count: number;
    closeTimeOut: number;
    actions: ISnackBarAction[];
    options: ISnackBarConfig;
}

export interface ISnackBarState {
    currentUrl: string;
    snackBars: ISnackBar[];
    options: ISnackBarOptions;
}

export interface ISnackBarAction {
    label?: string;
    callback?: any;
    isAutoClose?: boolean;
}


export const INITIAL_ISNACKBAR_OPTIONS: ISnackBarOptions = {
    position: PositionType.BOTTOM_RIGHT,
    maxNoOfSnackBar: 10,
    autoCloseOnTransition: false,
    template: TemplateType.CLASSIC,
    groupRuleType: GroupRuleType.NO_RULE,
    rankBars: [],
    infoOptions: {
        isClose: false,
        closeTimeOut: 0,
        opacity: 1,
    },
    successOptions: {
        isClose: false,
        closeTimeOut: 0,
        opacity: 1,
    },
    warnOptions: {
        isClose: false,
        closeTimeOut: 0,
        opacity: 1,
    },
    errorOptions: {
        isClose: false,
        closeTimeOut: 0,
        opacity: 1,
    },
};

export const INITIAL_SNACK_BAR_STATE: ISnackBarState = {
    currentUrl: '',
    snackBars: [],
    options: INITIAL_ISNACKBAR_OPTIONS,
};

export const ISNACKBAR_OPTIONS = new InjectionToken<ISnackBarOptions>('snackbar.config');
