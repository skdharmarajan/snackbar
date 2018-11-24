import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { SnackBarType } from '../snack-bar.action';
import { BarType, TemplateType } from '../snack-bar.enum';
import { IBarOptions, ISnackBar, ISnackBarOptions, ISnackBarState } from '../snack-bar.model';
import { SnackBarService } from '../snack-bar.service';

@Component({
    selector: 'sb-bar',
    templateUrl: './bar.component.html',
    styleUrls: ['./bar.component.scss'],
})
export class BarComponent implements OnInit {
    @Input() model: ISnackBar;

    public isShowContent: boolean;
    private snackBarOptions: ISnackBarOptions;

    @ViewChild('barPanel') barPanelCtrl: ElementRef;
    constructor(
        private store$: Store<ISnackBarState>,
        private snackBarService: SnackBarService,
    ) {
        this.snackBarOptions = this.snackBarService.getSnackBarOptions;
    }

    ngOnInit(): void {
        this.letsAutoCloseBar();
        this.applyPanelClass();
    }

    onClose(): void {
        this.store$.dispatch({ type: SnackBarType.REMOVE_SNACKBAR_ON_CLOSE, payload: this.model });
    }

    onToggleDetail(): void {
        this.isShowContent = !this.isShowContent;
    }

    get getBannerClass(): string {
        return this.model.type.toLocaleLowerCase();
    }

    get getBannerBorderClass(): string {
        return `${this.model.type.toLocaleLowerCase()}-b`;
    }

    get isError(): boolean {
        return this.model.type === BarType.ERROR;
    }

    get isWarn(): boolean {
        return this.model.type === BarType.WARN;
    }

    get isSuccess(): boolean {
        return this.model.type === BarType.SUCCESS;
    }

    get isInfo(): boolean {
        return this.model.type === BarType.INFO;
    }

    get isDark(): boolean {
        return this.snackBarOptions.template === TemplateType.DARK;
    }

    get isSuccessDark(): boolean {
        return this.isSuccess && this.isDark;
    }

    get isWarnDark(): boolean {
        return this.isWarn && this.isDark;
    }

    get isInfoDark(): boolean {
        return this.isInfo && this.isDark;
    }

    get isErrorDark(): boolean {
        return this.isError && this.isDark;
    }

    get isClose(): boolean {
        return this.barOptions.isClose;
    }

    get isDetail(): boolean {
        return this.barOptions.isDetail;
    }

    get closeTimeOut(): number {
        return this.barOptions.closeTimeOut;
    }

    get hasDetail(): boolean {
        return !this.model.detail || this.model.detail.trim() === '';
    }

    /**
     *
     */
    get title(): string {
        if (!this.model || !this.model.title) { return this.model.type.toLocaleLowerCase(); }

        return this.model.title;
    }

    get count(): number {
        return this.model.count;
    }

    /**
     *
     */
    get content(): string {
        if (!this.model || !this.model.content) { return; }
        return this.model.content;
    }

    get detail(): string {
        if (!this.model || !this.model.detail) { return 'No detail available'; }
        return this.model.detail;
    }

    get barOptions(): IBarOptions {
        switch (this.model.type) {
            case BarType.ERROR: {
                return this.snackBarOptions.errorOptions;
            }

            case BarType.WARN: {
                return this.snackBarOptions.warnOptions;
            }

            case BarType.SUCCESS: {
                return this.snackBarOptions.successOptions;
            }

            case BarType.INFO: {
                return this.snackBarOptions.infoOptions;
            }

            default: {
                return this.snackBarOptions.infoOptions;
            }
        }
    }

    get opacity(): number {
        return this.barOptions.opacity;
    }

    get isPanelClass(): boolean {
        return this.barOptions.panelClass !== '';
    }

    get panelClass(): string {
        return this.barOptions.panelClass;
    }

    /**
     * Lets auto close the snack bar based on closeTimeOut.
     */
    private letsAutoCloseBar(): void {
        if (this.closeTimeOut === 0 || !this.closeTimeOut) { return; }

        setTimeout(() => {
            this.onClose();
        }, this.closeTimeOut);
    }

    private applyPanelClass(): void {
        if (!this.isPanelClass) { return; }

        const className: string = this.barPanelCtrl.nativeElement.className;
        this.barPanelCtrl.nativeElement.className = `${className} ${this.panelClass}`;
    }
}
