import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiAuthenticationService } from '../api-authentication.service';

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
      email: [''],
      password: ['']
    });
  }

  submit(){
    const email = this.form.get('email')?.value;
    const password = this.form.get('password')?.value;

    this.apiAuthenticationService.loginUser({
      email: email,
      password: password,
    });
  }

}
