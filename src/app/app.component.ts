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
    this.snackBarService.success('title', 'content', 'detail');
    // // Warn
    // this.snackBarService.warn('title', 'content', 'detail');
    // // Error
    // this.snackBarService.error('title', 'content', 'detail');
  }
}
