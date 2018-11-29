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
    this.snackBarService.error('title', 'First Content. Testing out the scroll bar functionality on content section. This functionality is very difficult to test.', 'detail');
    // // Warn
    // this.snackBarService.warn('title', 'content', 'detail');
    // // Error
    // this.snackBarService.error('title', 'content', 'detail');

    setTimeout(() => {
      this.snackBarService.error('title', 'Second Content. Testing out the scroll bar functionality on content section', 'Second detail');
      // this.snackBarService.success('title', 'Second Content. Testing out the scroll bar functionality on content section', 'Second detail');
      // this.snackBarService.success('title', 'Second Content. Testing out the scroll bar functionality on content section', 'Second detail');
    }, 4000)
  }
}
