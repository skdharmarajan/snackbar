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
    // Info
    this.snackBarService.info('', 'content is too long to match the rule types and details content is too long to match the rule types and details content is too long to match the rule types and details content is too long to match the rule types and details content is too long to match the rule types and details', 'detail');
    // // Success
    this.snackBarService.success('title', 'content', 'detail');
    // // Warn
    // this.snackBarService.warn('title', 'content', 'detail');
    // // Error
    // this.snackBarService.error('title', 'content', 'detail');
  }
}
