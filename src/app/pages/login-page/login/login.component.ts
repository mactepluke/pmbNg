import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
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
    this.userService.logIn(this.loginForm.value);
  }

}
