import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';

import { BarComponent } from './bar/bar.component';
import { ContainerComponent } from './container/container.component';
import { INITIAL_ISNACKBAR_OPTIONS, ISNACKBAR_OPTIONS, ISnackBarOptions } from './snack-bar.model';
import { snackBarReducer } from './snack-bar.reducer';
import { SnackBarService } from './snack-bar.service';
import { CloseIconComponent } from './icons/close.icon';
import { CollapseIconComponent } from './icons/collapse.icon';
import { ErrorIconComponent } from './icons/error.icon';
import { ExpandIconComponent } from './icons/expand.icon';
import { InfoIconComponent } from './icons/info.icon';
import { SuccessIconComponent } from './icons/success.icon';
import { WarnIconComponent } from './icons/warn.icon';
import { SquareIconComponent } from './icons/square.icon';

@NgModule({
    declarations: [
        BarComponent,
        ContainerComponent,
        CloseIconComponent,
        CollapseIconComponent,
        ErrorIconComponent,
        ExpandIconComponent,
        InfoIconComponent,
        SuccessIconComponent,
        WarnIconComponent,
        SquareIconComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        StoreModule.forFeature('snackBarState', snackBarReducer),
    ],
    exports: [
        ContainerComponent, BarComponent,
    ],
    providers: [
        SnackBarService,
    ],
    entryComponents: [],
})
export class SnackBarModule {
    static forRoot(config: ISnackBarOptions = INITIAL_ISNACKBAR_OPTIONS): ModuleWithProviders {
        return {
            ngModule: SnackBarModule,
            providers: [
                SnackBarService,
                { provide: ISNACKBAR_OPTIONS, useValue: config },
            ],
        };
    }
}
