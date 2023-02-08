import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './forms/input/input.component';

import { AnalyticsComponent } from './forms/analytics/analytics.component';
import { IndexComponent } from './index/index/index.component';
import { OutputShowComponent } from './forms/output-show/output-show.component';
import { OutputTemplateComponent } from './forms/output-template/output-template.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    AnalyticsComponent,
    IndexComponent,
    OutputShowComponent,
    OutputTemplateComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
