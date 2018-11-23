# Snackbar For ANGULAR 5/6/7
 SnackBar is a service for displaying snack-bar notifications. On latest version of angular 5/6/7.
 * Group snackbar based on Type, Content.
 * Rank snackbar.

# Get Started

   * ##### Please create issues or add suggestions, I am actively working on this module.
   
   * Setup Code https://stackblitz.com/edit/angular-4hvr9p
   * Demo https://angular-4hvr9p.stackblitz.io

   * ##### Install
     ```js
     npm install ng7-snack-bar --save
     npm install @ngrx/store --save
     npm install @angular/animation --save
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


# Live
  * Demo https://angular-4hvr9p.stackblitz.io

# UpComing Feature 2.0.0
  ##### Will add shortly, stay tuned
