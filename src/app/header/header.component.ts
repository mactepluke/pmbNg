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

 onReturnHome() {
    this.router.navigateByUrl('paymybuddy');
  }

  onGoToTransfer() {
      this.router.navigateByUrl('paymybuddy/transfer');
  }

  onGoToProfile() {
      this.router.navigateByUrl('paymybuddy/profile');
  }

  onGoToContact() {
    this.router.navigateByUrl('paymybuddy/contact');
  }

  onGoToAccount() {
    this.router.navigateByUrl('paymybuddy/account');
  }

}
