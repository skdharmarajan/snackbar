# Snackbar
 SnackBar is a service for displaying snack-bar notifications. On latest version of angular 7

# Get Started

   * ##### Install
     ```js
     npm i ng7-snack-bar
     ```

   * ##### Import the **SnackBarModule**
     ```js
     import { SnackBarModule } from 'ng7-snack-bar';
     import { StoreModule } from '@ngrx/store';

     @NgModule({
       declarations: [AppComponent, ...],
       imports: [SnackBarModule.forRoot(), StoreModule.forRoot([]), ...],
       bootstrap: [AppComponent]
     })
     export class AppModule {
     }
     ```
   * ##### Add the **SnackBarContainer to AppComponent**
   ```html
    <sb-container></sb-container>
   ```

   * ##### Import the **SnackBarService to Needed Component**
   ```js
   import { SnackBarService } from 'ng7-snack-bar';

   constructor(
      private snackBarService: SnackBarService
   ) {}

   showNotification(): void {
    // Info
    this.snackBarService.info('title', 'content', 'detail');
    // Success
    this.snackBarService.success('title', 'content', 'detail');
    // Warn
    this.snackBarService.warn('title', 'content', 'detail');
    // Error
    this.snackBarService.error('title', 'content', 'detail');
  }
   ```




# Features
  * 4 States
     * *INFO*
     * *SUCCESS*
     * *WARN*
     * *ERROR*

  * 4 Positions
     * *TOP LEFT*
     * *TOP RIGHT*
     * *BOTTOM LEFT*
     * *BOTTOM RIGHT*

  * 2 Templates
     * *Classic*
     * *Dark*

  * 2 Grouping Rules
     * *Based on Type - Combines the notifications based on type*
     * *Based on Content - Combines the notifications based on content*

  * AutoCloseOnTransition
     * *Auto closes all the notification based on route*

  * Rank Notifications
     * *Ability to rank the 4 notification states*

  * Detail Panel
     * *Can show additional details using expand and collapse*

  * Close Panel
     * *Close the notifications on demand*

  * Auto Close
     * *Auto close the notification based on the specified interval*


# Screenshots
  ##### Will add shortly, stay tuned

# Dependencies
  * @angular/common                   - 7.0.0
  * @angular/core                     - 7.0.0
  * @angular/animations               - 7.0.0
  * @angular/flex-layout              - 7.0.0-beta.19
  * @angular/platform-browser         - 7.0.0
  * @angular/router                   - 7.0.0
  * @fortawesome/angular-fontawesome  - 0.3.0
  * @fortawesome/fontawesome-svg-core - 1.2.8
  * @fortawesome/free-solid-svg-icons - 5.5.0
  * @ngrx/store                       - 6.1.0
  *  rxjs                             - 6.3.3

# Live
  ##### Will add shortly, stay tuned

# UpComing Feature 2.0.0
  ##### Will add shortly, stay tuned
