import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SessionService} from "../../../services/session.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private sessionService: SessionService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
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
    this.sessionService.logIn(this.loginForm.value);
    this.router.navigateByUrl('paymybuddy/profile');
  }

}
