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
    this.snackBarService.info(
      'Info',
      'Introducing BackDrop.'
    );

    this.snackBarService.warn(
      'Info',
      'Introducing BackDrop.'
    );

  }
}
