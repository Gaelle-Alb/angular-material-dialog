# AngularMaterialDialog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Prerequisites

`npm install --save @angular/animations`

`npm i @angular/cdk@9.2.4 @angular/material@9.2.4 --save`
*Note: I had the following error with the version 10 of cdk "Uncaught typeError: Class constructor Platform cannot be invoked without 'new'". Taking an older version of cdk worked.*

## Development server

Run `ng serve --port 4200` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Add new component

Run `ng generate component component-name` to generate a new component. You can also use `ng g c component-name`.


## Steps to build a custom dialog.

1. Import required modules (i.e. MatDialogModule).
2. In app.component.ts, create and open a MatDialogConfig. You can override some default behaviors (like `disableClose`).
3. Create your new component which will contain the dialog box. 3 directives have to be completed :
  - mat-dialog-title: title of the dialog
  - mat-dialog-content: body of the dialog
  - mat-dialog-actions: action buttons (in general, "save" or "cancel")
4. Close the dialog box.
5. Exchanges between ts and angular dialog component are possible:
  - Send data to the angular dialog component (argument dialogConfig for dialogRef in our example).
  - Receive data from the angular dialog component (afterClosed().subscribe)


## Important notes

- Do not include your dialog's component html selector in a html file (or anywhere) like <app-course-dialog></app-course-dialog>

## Sources

- https://www.techiediaries.com/angular-material-dialogs/
- https://blog.angular-university.io/angular-material-dialog/
