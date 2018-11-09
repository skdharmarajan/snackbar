import { ISnackBar, ISnackBarOptions } from '../snack-bar.model';
import { GroupRuleType, BarType } from '../snack-bar.enum';

export function matchContentRule(snackBars: ISnackBar[], options: ISnackBarOptions, newSnackBar: ISnackBar): ISnackBar[] {
    if (options.groupRuleType !== GroupRuleType.BASED_ON_CONTENT) { return snackBars; }

    const snackBar: ISnackBar = getSnackBarByContent(snackBars, newSnackBar.content, newSnackBar.type);
    if (!snackBar) {
        snackBars.push(newSnackBar);
        return snackBars;
    }

    snackBar.details.push(newSnackBar.detail);
    snackBar.count++;
    return snackBars;
}

function getSnackBarByContent(snackBars: ISnackBar[], content: string, type: BarType): ISnackBar {
    if (snackBars.length === 0 || !content || content.trim() === '') { return; }
    return snackBars.find((f) => f.type === type &&
    f.content.toLocaleLowerCase().trim() === content.toLocaleLowerCase().trim());
}
