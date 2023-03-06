import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {User} from "../../model/user";
import {SessionService} from "../../services/session.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  @Input() currentUser$!: Observable<User>;

  constructor(private sessionService: SessionService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    if (SessionService.isLoggedIn)  {
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

  onSubmitForm(): void  {
    console.log(this.loginForm.value);
    this.sessionService
      .logIn(this.loginForm.value)
      .subscribe( user => {
        SessionService.currentUser = user;
        if (user != null) {
        SessionService.isLoggedIn = true;
        this.router.navigateByUrl('paymybuddy/profile');
        }
      });
  }

}
