import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from '../ngrx/notification/notification.service';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.sass']
})
export class NotifyComponent  {

  form : FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(
    public dialogRef: MatDialogRef<NotifyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {name: string},
    private _fb: FormBuilder,
    private notificationService: NotificationService,
  ) {
    this.form = this._fb.group({
      title: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  notify(){
    this.notificationService.createNotification(this.form);
    this.dialogRef.close();
  }


}
