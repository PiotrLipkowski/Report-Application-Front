import { Component, OnInit } from '@angular/core';

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
  subjects: Subject[] = [
    {value: 'eit-1', viewValue: 'Elektronika i telekomunikacja'},
    {value: 'elek-2', viewValue: 'Elektrotechnika'},
    {value: 'ener-3', viewValue: 'Energetyka'},
    {value: 'is-4', viewValue: 'Informatyka stosowana'},
    {value: 'ti-5',  viewValue: 'Teleinformatyka'}
  ];


  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  onSubmit() {
    console.log(this.form);

    this.signupInfo = new SignUpInfo(
      this.form.name,
      this.form.surname,
      this.form.username,
      this.form.indeks,
      this.form.grupa,
      this.form.email,
      this.form.password);

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
