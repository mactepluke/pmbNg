import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup, FormGroupDirective, NgForm,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {User} from "../../../model/user";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  createForm!: FormGroup;
  user!: User;

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
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
    console.log(this.userService.createAccount(this.createForm.value).subscribe(user => this.user = user));
    //console.log(this.user.email);
  }

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    // @ts-ignore
    let pass = group.get('password').value;
    // @ts-ignore
    let confirmPass = group.get('confirmedPassword').value;
    return pass === confirmPass ? null : { notSame: true }
  }

}
