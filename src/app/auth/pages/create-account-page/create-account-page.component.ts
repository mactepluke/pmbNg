import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {UserService} from "../../../core/services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-account-page',
  templateUrl: './create-account-page.component.html',
  styleUrls: ['./create-account-page.component.scss']
})
export class CreateAccountPageComponent implements OnInit {
  createForm!: FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
        email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        password: [null, Validators.required],
        confirmedPassword: [null, Validators.required],
      },
      {
        updateOn: 'blur',
        validators: this.checkPasswords
      });
  }

  onSubmitForm() {
    console.log(this.createForm.value);
    this.userService
      .createAccount(this.createForm.value)
      .subscribe(() => {
        this.router.navigateByUrl('paymybuddy/login')
  });
  }

  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    // @ts-ignore
    let pass = group.get('password').value;
    // @ts-ignore
    let confirmPass = group.get('confirmedPassword').value;
    return pass === confirmPass ? null : {notSame: true}
  }
}
