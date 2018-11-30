import { Component } from '@angular/core';
import {SnackBarService} from "ng7-snack-bar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng7-snack-bar-library';
  constructor(
    private snackBarService: SnackBarService
  ) {
    this.showNotification();
  }

  showNotification(): void {
    // // Success
    // @ts-ignore
    this.snackBarService.warn(
      'Warn',
      'Introducing Actions. Max of 3 actions, with autoClose and callBack feature',
       null,
        [{
          label: 'Close',
          isAutoClose: true,
        },
          {
            label: 'Confirm',
            isAutoClose: false,
          }]
    );

  }
}
