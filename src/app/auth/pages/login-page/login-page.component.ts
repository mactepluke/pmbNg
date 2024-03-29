import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {User} from "../../../pmb/models/user";
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  @Input() currentUser$!: Observable<User>;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
        email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        password: [null, Validators.required]
      },
      {
        updateOn: 'blur'
      });
  }

  onSubmitForm(): void {

    this.authService
      .logIn(this.loginForm.value)
      .subscribe({
        next: (user) => {

          if (user != null) {
            this.authService.currentUser = user;
            this.authService.isLoggedIn = true;
            this.router.navigateByUrl('paymybuddy/pmb/profile').then(() => {
              this.messageService.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'User logged in',
                life: 3000
              })
            });

          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Cannot log in',
              detail: 'User not found.',
              life: 3000
            });
          }
        },
        error: () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Cannot log in',
            detail: 'Invalid password.',
            life: 3000
          });
        }
      })
  }
}
