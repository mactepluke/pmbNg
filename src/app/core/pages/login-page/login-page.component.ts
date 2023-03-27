import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {User} from "../../models/user";
import {SessionService} from "../../services/session.service";
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

  constructor(private sessionService: SessionService,
              private formBuilder: FormBuilder,
              private router: Router,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    if (this.sessionService.isLoggedIn) {
      this.router.navigateByUrl('paymybuddy/profile');
    }

    this.loginForm = this.formBuilder.group({
        email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        password: [null, Validators.required],
        rememberMe: [false]
      },
      {
        updateOn: 'blur'
      });
  }

  onSubmitForm(): void {
    console.log(this.loginForm.value);

    this.sessionService
      .logIn(this.loginForm.value)
      .subscribe({
        next: (user) => {
          console.log(user);

          if (user != null) {
            this.sessionService.currentUser = user;
            this.sessionService.isLoggedIn = true;
            this.router.navigateByUrl('paymybuddy/profile').then(() => {
              console.log("THEN");
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
