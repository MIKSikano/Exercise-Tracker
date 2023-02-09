import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputComponent } from './forms/input/input.component';
import { HttpClientModule } from '@angular/common/http';
import { AnalyticsComponent } from './forms/analytics/analytics.component';
import { IndexComponent } from './index/index/index.component';
import { OutputShowComponent } from './forms/output-show/output-show.component';
import { OutputTemplateComponent } from './forms/output-template/output-template.component';
import { RouterModule, Routes } from '@angular/router';
import { ExercisetypeComponent } from './forms/exercisetype/exercisetype.component';
import { HeaderComponent } from './sections/header/header.component';
import { WorkoutrecordComponent } from './forms/workoutrecord/workoutrecord.component';
import { ExerciseDataComponent } from './forms/exercise-data/exercise-data.component';

const appRoutes: Routes = [{ path: '', component: IndexComponent },
{ path: 'exercise-type', component: ExercisetypeComponent },
{ path: 'workout-record', component: WorkoutrecordComponent },
{ path: 'exercise-data', component: ExerciseDataComponent }]

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    AnalyticsComponent,
    IndexComponent,
    OutputShowComponent,
    OutputTemplateComponent,
    ExercisetypeComponent,
    HeaderComponent,
    WorkoutrecordComponent,
    ExerciseDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
