import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

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
