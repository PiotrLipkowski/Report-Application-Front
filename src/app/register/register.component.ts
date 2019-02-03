import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth/auth.service';
import { SignUpInfo } from '../auth/signup-info';

export interface Subject {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  formGroup: FormGroup;

  nameFormGroup: FormGroup;
  studentFormGroup: FormGroup;
  loginFormGroup: FormGroup;

  get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }

  hide = true;
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private _formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          firstNameFormCtrl: ['', Validators.required],
          lastNameFormCtrl: ['', Validators.required],
        }),
        this._formBuilder.group({
          indexFormCtrl: ['', Validators.required],
          groupIdFormCtrl: ['', Validators.required],
        }),
        this._formBuilder.group({
          userNameFormCtrl: ['', Validators.required],
          emailFormCtrl: ['', Validators.email],
          passwordFormCtrl: ['', Validators.required],
        }),
      ])
    });

    this.nameFormGroup = this._formBuilder.group({
      firstNameCtrl: ['', Validators.required],
      lastNameCtrl: ['', Validators.required],
    });

    this.studentFormGroup = this._formBuilder.group({
      indexCtrl: ['', Validators.required],
      groupIdCtrl: ['', Validators.required],
    });

    this.loginFormGroup = this._formBuilder.group({
      userNameCtrl: ['', Validators.required],
      emailCtrl: ['', Validators.email],
      passwordCtrl: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log( this.formArray.value[0].firstNameFormCtrl,
      this.formArray.value[0].lastNameFormCtrl,
      this.formArray.value[2].userNameFormCtrl,
      this.formArray.value[1].indexFormCtrl,
      this.formArray.value[1].groupIdFormCtrl,
      this.formArray.value[2].emailFormCtrl,
      this.formArray.value[2].passwordFormCtrl);

    this.signupInfo = new SignUpInfo(
      this.formArray.value[0].firstNameFormCtrl,
      this.formArray.value[0].lastNameFormCtrl,
      this.formArray.value[2].userNameFormCtrl,
      this.formArray.value[1].indexFormCtrl,
      this.formArray.value[1].groupIdFormCtrl,
      this.formArray.value[2].emailFormCtrl,
      this.formArray.value[2].passwordFormCtrl);


    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log("data",data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log("error",error);
        //this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
