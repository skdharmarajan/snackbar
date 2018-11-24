<div>
  <div>
    <div>DARK</div>
    <img src="https://skdharmarajan.github.io/snackbar/src/assets/img/Dark_Info.png" width="300" />
  </div>
  <div>
    <div>CLASSIC</div>
    <img src="https://skdharmarajan.github.io/snackbar/src/assets/img/Classic_Info.png" width="300" />
  </div>
</div>

# Snackbar For ANGULAR 4/5/6/7
 SnackBar is a service for displaying snack-bar notifications. On latest version of angular 5/6/7.
 * Group snackbar based on Type, Content.
 * Rank snackbar.
 
# Versions
| ng7-snack-bar     | Angular |
| ------------      | ------- |
| >=1.6.0<1.7.0     | 4.x     |
| >=1.7.X           | 5.x     |
| >=1.7.X           | 6.x     |
| >=1.7.X           | 7.x     |

# Get Started

   * ##### Please create issues or add suggestions, I am actively working on this module.
   
   * Setup Code https://stackblitz.com/edit/ng7-snack-bar
   * Demo https://ng7-snack-bar.stackblitz.io

   * ##### Install
     ```js
     npm install ng7-snack-bar --save
     npm install @ngrx/store --save
     npm install @angular/animations --save (Only for angular >=5.X )
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
  * Demo https://ng7-snack-bar.stackblitz.io

# UpComing Feature 2.0.0
  ##### Will add shortly, stay tuned
