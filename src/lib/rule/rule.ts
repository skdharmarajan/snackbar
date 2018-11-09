import { ISnackBar, ISnackBarOptions } from '../snack-bar.model';
import { matchTypeRule } from './match-type.rule';
import { matchNoRule } from './match-no.rule';
import { matchContentRule } from './match-content.rule';
import { rankRule } from './rank.rule';

export function runSnackBarRules(snackBars: ISnackBar[], options: ISnackBarOptions, newSnackBar: ISnackBar): ISnackBar[] {
    snackBars = matchNoRule(snackBars, options, newSnackBar);
    snackBars = matchContentRule(snackBars, options, newSnackBar);
    snackBars = matchTypeRule(snackBars, options, newSnackBar);
    return rankRule(snackBars, options);
}
