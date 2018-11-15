import { ISnackBar, ISnackBarOptions } from '../snack-bar.model';
import { GroupRuleType } from '../snack-bar.enum';

export function matchNoRule(snackBars: ISnackBar[], options: ISnackBarOptions, newSnackBar: ISnackBar): ISnackBar[] {
    if (options.groupRuleType !== GroupRuleType.NO_RULE) { return snackBars; }
    return [
        ...snackBars,
        newSnackBar,
    ];
}
