import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  private _defaultDurationInSeconds = 2;
  private _horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  private _verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private _snackBar : MatSnackBar) {}

  openDuratedSnackBar(message: string){
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this._defaultDurationInSeconds * 1000,
      horizontalPosition: this._horizontalPosition,
      verticalPosition: this._verticalPosition,
      panelClass:['snackbar-background'],
      data: {
        message
      }
    });
  }
}
