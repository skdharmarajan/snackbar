import {Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Store} from '@ngrx/store';
import {BarType, SnackBarType, TemplateType} from '../snack-bar.enum';
import {IBarOptions, ISnackBar, ISnackBarAction, ISnackBarOptions, ISnackBarState} from '../snack-bar.model';
import {SnackBarService} from '../snack-bar.service';
import {ACCORDION_ANIMATION} from '../animations/animations';

@Component({
    selector: 'sb-bar',
    templateUrl: './bar.component.html',
    styleUrls: ['./bar.component.scss'],
    animations: [
        ACCORDION_ANIMATION
    ],
})
export class BarComponent implements OnInit {
    @Input() model: ISnackBar;

    public isShowContent: boolean;
    private snackBarOptions: ISnackBarOptions;
    private backDropDiv: any;

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
        this.addBackDrop();
    }

    onClose(): void {
        this.store$.dispatch({ type: SnackBarType.REMOVE_SNACKBAR_ON_CLOSE, payload: this.model });
        this.removeBackDrop();
    }

    onToggleDetail(): void {
        this.isShowContent = !this.isShowContent;
    }

    onAction(action: ISnackBarAction): void {
       setTimeout(() => {
         this.autoCloseOnAction(action.isAutoClose);
         this.executeCallBack(action.callback);
       }, 250);
    }

    private autoCloseOnAction(isAutoClose: boolean): void {
      if (!isAutoClose) { return; }
      this.onClose();
    }

    private executeCallBack(callBack: any): void {
      if (!callBack) { return; }
      callBack();
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

    get hasActions(): boolean {
      return this.model.actions && this.model.actions.length > 0;
    }

    get isBackDrop(): boolean {
      return this.model.options && this.model.options.isBackDrop;
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

    private addBackDrop(): void {
      if (!this.isBackDrop) { return; }

      this.backDropDiv = document.createElement('div');
      this.backDropDiv.id = `${this.model.id}-snackBarBackDrop`;
      this.backDropDiv.style.height = '100%';
      this.backDropDiv.style.width = '100%';
      this.backDropDiv.style.background = 'rgba(17, 17, 17, 0.5)';
      this.backDropDiv.style.position = 'fixed';
      this.backDropDiv.style.top = '0';
      this.backDropDiv.style.left = '0';
      this.backDropDiv.style.zIndex = '99999';
      document.body.appendChild(this.backDropDiv);
    }

    private removeBackDrop(): void {
      if (!this.isBackDrop) { return; }

      document.body.removeChild(this.backDropDiv);
    }
}
