import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//TO INSTALL IN THE APP FOLDER :
//$>npm install --save @angular/material @angular/cdk
//$>npm install --save @angular/animations
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  //To be able to use the component as a dialog body, we need to declare it as an entryComponent
  //Otherwise, we will get the following error while opening the dialog :
  //Error: no component factory found for CourseDialogComponent. Did you add it to @NgModule.entryComponents?
  entryComponents: [CourseDialogComponent]
})
export class AppModule { }
