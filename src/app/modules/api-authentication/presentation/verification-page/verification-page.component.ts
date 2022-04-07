import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ApiAuthenticationService } from '../api-authentication.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-verification-page',
  templateUrl: './verification-page.component.html',
  styleUrls: ['./verification-page.component.sass']
})
export class VerificationPageComponent {

  form : FormGroup;

  constructor(
    private apiAuthenticationService : ApiAuthenticationService,
    private fb: FormBuilder,
  ) {
    this.form = fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  matcher = new MyErrorStateMatcher();

  submit(){
    const email = this.form.get('email')?.value;
    const password = this.form.get('password')?.value;

    this.apiAuthenticationService.loginUser({
      email: email,
      password: password,
    });
  }

}
