<div style="display: flex; flex-direction:row">
  <div>
    <div>DARK</div>
    <img src="https://skdharmarajan.github.io/snackbar/src/assets/img/Dark_Info.png" width="300" />
  </div>
  <div>
    <div>CLASSIC</div>
    <img src="https://skdharmarajan.github.io/snackbar/src/assets/img/Classic_Info.png" width="300" />
  </div>
</div>
<div style="display: flex; flex-direction:row">
  <div>
    <div>DETAIL WITH TYPE GROUPING</div>
    <img src="https://skdharmarajan.github.io/snackbar/src/assets/img/Dark_Error.png" width="300" />
  </div>
</div>

# Snackbar For ANGULAR 4/5/6/7
 SnackBar is a service for displaying snack-bar notifications. On latest version of angular 4/5/6/7.
 * Group snackbar based on Type, Content.
 * Rank snackbar.
 
# Versions
| ng7-snack-bar   | Angular |
| ------------    | ------- |
| 1.6.0           | 4.x     |
| 1.7.0           | 5.x     |
| 1.7.0           | 6.x     |
| 1.7.0           | 7.x     |

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
  | OPTION                 | TYPE              | DEFAULT                         | DESCRIPTION                               |
  |------------------------|-------------------|---------------------------------|-------------------------------------------|
  | position               | PositionType      | **BOTTOM_RIGHT**                | 4 Positions, to show the snack-bar        | 
  | maxNoOfSnackBar        | number            | **10**                          | Displays max no of snackbar               |
  | autoCloseOnTransition  | boolean           | **false**                       | Auto closes when page route occurs        |
  | template               | TemplateType      | **CLASSIC**                     | Classic/Dark templates                    | 
  | groupRuleType          | GroupRuleType     | **NO_RULE**                     | Groups the snack-bar based on type/content|
  | rankBars               | Array<BarType>    | **[]**                          | Based on rank the snackbar displays       |
  | infoOptions            | IBarOptions       |                                 | Configure Info snackbar                   |
  | successOptions         | IBarOptions       |                                 | Configure Success snackbar                |
  | warnOptions            | IBarOptions       |                                 | Configure Warn snackbar                   |
  | errorOptions           | IBarOptions       |                                 | Configure Error snackbar                  |
  
# Additional Snackbar Configuration
  | OPTION                 | TYPE              | DEFAULT                         | DESCRIPTION                               |
  |------------------------|-------------------|---------------------------------|-------------------------------------------|
  | isClose                | boolean           | false                           | Shows/Hides the close button              |
  | closeTimeOut           | number            | 0                               | Autoclose after specified interval        |
  | isDetail               | boolean           | false                           | Shows/Hides the detail button             |
  | panelClass             | string            |                                 | Overrides the specific snackbar class     |
  | opacity                | number            | 1                               | Specifies the opacity of snackbar         |


# Live
  * Demo https://ng7-snack-bar.stackblitz.io

# UpComing Feature 2.0.0
  ##### Will add shortly, stay tuned
