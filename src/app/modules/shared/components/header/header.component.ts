import { Component } from '@angular/core';
import { ApiAuthenticationService } from 'src/app/modules/api-authentication/presentation/api-authentication.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  constructor(
    private authService : ApiAuthenticationService,
    public loadingService : LoadingService,
  ) { }

  logout() {
    this.authService.logoutUser();
  }


}
