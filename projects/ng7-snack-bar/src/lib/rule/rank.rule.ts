import { ISnackBar, ISnackBarOptions } from '../snack-bar.model';
import { BarType } from '../snack-bar.enum';

export function rankRule(snackBars: ISnackBar[], options: ISnackBarOptions): ISnackBar[] {
    if (!options.rankBars || options.rankBars.length === 0
        || !snackBars || snackBars.length === 0) { return snackBars; }

    const rankedSnackBars: ISnackBar[] = [];
    const distinctRankBars: BarType[] = getDistinctRankBars(options.rankBars);

    distinctRankBars.forEach((rank) => {
        rankedSnackBars.push(...snackBars.filter((ix) => ix.type === rank));
    });

    if (rankedSnackBars.length !== snackBars.length) {
        rankedSnackBars.push(...getRestSnackBars(rankedSnackBars, snackBars));
    }

    return rankedSnackBars;
}

function getDistinctRankBars(barTypes: BarType[]): BarType[] {
    if (!barTypes || barTypes.length === 0) { return []; }
    const distinctBarTypes: BarType[] = [];

    barTypes.forEach((barType) => {
        if (distinctBarTypes.findIndex((fi) => fi === barType) !== -1) { return; }
        distinctBarTypes.push(barType);
    });

    return distinctBarTypes;
}

function getRestSnackBars(rankedSnackBars: ISnackBar[], snackBars: ISnackBar[]): ISnackBar[] {
    if (!rankedSnackBars || !snackBars || rankedSnackBars.length === 0 ||
        snackBars.length === 0) { return []; }
    const restSnackBars: ISnackBar[] = [];
    const addedIds: number[] = [];
    rankedSnackBars.forEach((snackBar) => addedIds.push(snackBar.id));
    snackBars.forEach((snackBar) => {
        if (addedIds.findIndex((fi) => fi === snackBar.id) !== -1) {
            return;
        }
        restSnackBars.push(snackBar);
    });

    return restSnackBars;
}
