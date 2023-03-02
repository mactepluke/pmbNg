import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {SessionService} from "../services/session.service";
import {Table} from "primeng/table";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  @Input() activePageName = '';

  constructor(private router: Router, private sessionService: SessionService) {

  }

//TODO implémenter plutôt les redirections sur le ngOnInit des différentes pages pour pas qu'on puisse taper l'url directement
  onReturnHome() {
    this.router.navigateByUrl('paymybuddy');
  }

  onGoToTransfer() {
    if (!this.sessionService.isLoggedIn())  {
      this.router.navigateByUrl('paymybuddy/account');
    } else {
      this.router.navigateByUrl('paymybuddy/transfer');
    }
  }

  onGoToProfile() {
    if (!this.sessionService.isLoggedIn())  {
      this.router.navigateByUrl('paymybuddy/account');
    } else {
      this.router.navigateByUrl('paymybuddy/profile');
    }
  }

  onGoToContact() {
    this.router.navigateByUrl('paymybuddy/contact');
  }

  onGoToAccount() {
    this.router.navigateByUrl('paymybuddy/account');
  }

}
