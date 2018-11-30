import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {StoreModule} from "@ngrx/store";
import {GroupRuleType, PositionType, SnackBarModule, TemplateType} from "ng7-snack-bar";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SnackBarModule.forRoot({
      template: TemplateType.DARK,
      groupRuleType: GroupRuleType.BASED_ON_TYPE,
      warnOptions: {
      }
    }),
    StoreModule.forRoot([]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
