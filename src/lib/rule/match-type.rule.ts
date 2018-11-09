import { ISnackBar, ISnackBarOptions } from '../snack-bar.model';
import { GroupRuleType, BarType } from '../snack-bar.enum';

export function matchTypeRule(snackBars: ISnackBar[], options: ISnackBarOptions, newSnackBar: ISnackBar): ISnackBar[] {
    if (options.groupRuleType !== GroupRuleType.BASED_ON_TYPE) { return snackBars; }

    const snackBar: ISnackBar = getSnackBarByType(snackBars, newSnackBar.type);
    if (!snackBar) {
        snackBars.push(newSnackBar);
        return snackBars;
    }

    snackBar.contents.push(newSnackBar.content);
    snackBar.details.push(newSnackBar.detail);
    snackBar.count++;
    return snackBars;
}

function getSnackBarByType(snackBars: ISnackBar[], type: BarType): ISnackBar {
    if (snackBars.length === 0) { return; }
    return snackBars.find((f) => f.type === type);
}
