import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm = new FormGroup({});
  constructor(private signUp: FormBuilder) {}
  signupSubBtn() {
    console.log(this.signupForm.value);
  }
  ngOnInit(): void {
    this.signupForm = this.signUp.group({
      sname: new FormControl('', [Validators.required,]),
      smail: new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
      spassword: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$")]),
      srepassword: new FormControl('', [Validators.required]),
      scheck: new FormControl(false, [Validators.requiredTrue])
    },
    {
      validators: this.MustMatch('spassword','srepassword')
    }
    )
  }
  get sigupFormControls() {
    return this.signupForm.controls
  }
  MustMatch(controlName: any, matchingControlName: any) {
    return (FormGroup: FormGroup) => {
      const control = FormGroup.controls[controlName];
      const matchingControl = FormGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors?.['MustMatch']) {
        return
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({MustMatch:true})
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

}
