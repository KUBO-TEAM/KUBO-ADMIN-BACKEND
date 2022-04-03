import { Component } from '@angular/core';
import { ApiAuthenticationService } from 'src/app/modules/api-authentication/presentation/api-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  constructor(private authService : ApiAuthenticationService) { }

  logout() {
    this.authService.logoutUser();
  }


}
