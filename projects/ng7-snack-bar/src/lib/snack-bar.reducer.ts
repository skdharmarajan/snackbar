import { SnackBarAction } from './snack-bar.action';
import { INITIAL_SNACK_BAR_STATE, ISnackBarState } from './snack-bar.model';
import { runSnackBarRules } from './rule/rule';
import {SnackBarType} from "./snack-bar.enum";

export function snackBarReducer(state: ISnackBarState = INITIAL_SNACK_BAR_STATE, action: SnackBarAction): ISnackBarState {
    switch (action.type) {
        case SnackBarType.SHOW_SNACKBAR: {
            if (state.snackBars.length >= state.options.maxNoOfSnackBar) {
                return state;
            }

            return {
                currentUrl: state.currentUrl,
                snackBars: [...runSnackBarRules(state.snackBars, state.options, {
                    id: state.snackBars.length,
                    title: action.title,
                    content: action.content,
                    contents: [action.content],
                    detail: action.detail,
                    details: [action.detail],
                    type: action.barType,
                    count: 1,
                    closeTimeOut: 1,
                    actions: (action.actions && action.actions.length > 3) ? action.actions.slice(0, 3) : action.actions,
                    options: action.options,
                })],
                options: state.options,
            };
        }

        case SnackBarType.SET_SNACKBAR_IOPTIONS: {
            return {
                currentUrl: state.currentUrl,
                snackBars: state.snackBars,
                options: action.payload,
            };
        }

        case SnackBarType.REMOVE_SNACKBAR_ON_CLOSE: {
            return {
                currentUrl: state.currentUrl,
                snackBars: [...state.snackBars.filter((f) => f.id !== action.payload.id)],
                options: state.options,
            };
        }

        case SnackBarType.CLEAR_SNACKBAR: {
            return {
                currentUrl: '',
                snackBars: [],
                options: state.options,
            };
        }

        case SnackBarType.SET_CURRENT_URL: {
            return {
                currentUrl: action.payload,
                snackBars: state.snackBars,
                options: state.options,
            };
        }

        default: { return state; }
    }
}
