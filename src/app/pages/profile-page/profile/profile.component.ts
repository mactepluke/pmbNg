import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../model/user";
import {SessionService} from "../../../services/session.service";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() currentUser!: User;
  dialog!: boolean;
  submitted!: boolean;
  email!: string;
  confirmedPassword!: string;

  constructor(private sessionService: SessionService,
              private router: Router,
              private userService: UserService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.email = this.currentUser.email;
  }

  onLogout() {
    this.sessionService.logOut();
    this.router.navigateByUrl('paymybuddy');
  }

  onEditProfile() {
    this.submitted = false;
    this.dialog = true;
  }

  hideDialog() {
    this.dialog = false;
    this.submitted = false;
  }

  saveProfile() {
    this.submitted = true;

    if ((this.currentUser.email != null) && (this.currentUser.password === this.confirmedPassword))
       {
      this.userService.updateUser(this.email, this.currentUser)
        .subscribe(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'User profile Updated',
            life: 3000});
          SessionService.currentUser = this.currentUser;
        });
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Cannot update user profile',
        detail: 'Invalid request',
        life: 3000
      })
    }
    this.dialog = false;
  }
}

