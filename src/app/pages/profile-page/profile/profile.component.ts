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
  oldEmail!: string;
  email!: string;
  password!: string;
  confirmedPassword!: string;
  firstName!: string;
  lastName!: string;

  constructor(private sessionService: SessionService,
              private router: Router,
              private userService: UserService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.oldEmail = this.currentUser.email;
    this.email = this.currentUser.email;
    this.password = this.currentUser.password;
    this.firstName = this.currentUser.firstName;
    this.lastName = this.currentUser.lastName;
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

    if ((this.email.length > 0)
      && (this.password === this.confirmedPassword)
      && (this.firstName.length != 0)
      && (this.lastName.length != 0)
    ) {

      let updatedUser = new User();
      updatedUser = SessionService.currentUser;
      updatedUser.email = this.email;
      updatedUser.password = this.password;
      updatedUser.firstName = this.firstName;
      updatedUser.lastName = this.lastName;

      this.userService.updateUser(this.oldEmail, updatedUser)
        .subscribe({
          next: () => {
            this.messageService.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'User profile Updated',
                life: 3000
              }
            );
            this.oldEmail = this.email;
            SessionService.currentUser = updatedUser;
            this.currentUser = updatedUser;
            this.dialog = false;
          },
          error: () => {
          }
        });
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Cannot update user profile',
        detail: 'Invalid request',
        life: 3000
      })
    }
  }
}

