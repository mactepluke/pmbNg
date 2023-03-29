import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";
import {UserService} from "../../../core/services/user.service";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  dialog!: boolean;
  submitted!: boolean;
  oldEmail!: string;
  email!: string;
  password!: string;
  confirmedPassword!: string;
  firstName!: string;
  lastName!: string;

  constructor(private authService: AuthService,
              private router: Router,
              private userService: UserService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.oldEmail = this.authService.currentUser.email;
    this.email = this.authService.currentUser.email;
    this.password = this.authService.currentUser.password;
    this.firstName = this.authService.currentUser.firstName;
    this.lastName = this.authService.currentUser.lastName;
    this.confirmedPassword = '';
  }

  currentUser(): User{
    return this.authService.currentUser;
  }

  onLogout() {
    this.authService.logOut();
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
      updatedUser = this.authService.currentUser;
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
            this.authService.currentUser = updatedUser;
            this.dialog = false;
            this.confirmedPassword = '';
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

