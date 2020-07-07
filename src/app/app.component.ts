import { Component } from '@angular/core';
//TO INSTALL IN THE APP FOLDER :
//$>npm install --save @angular/material @angular/cdk
//$>npm install --save @angular/animations
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { CourseDialogComponent } from './course-dialog/course-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private dialog: MatDialog) {}

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    //Other options: hasBackdrop, panelClass, backdropClass, position, direction, closeOnNavigation

    this.dialog.open(CourseDialogComponent, dialogConfig);
  }
}
