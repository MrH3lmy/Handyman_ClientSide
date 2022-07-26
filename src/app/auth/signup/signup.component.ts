import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CraftService } from 'src/app/services/craft.service';
import { RegisterService } from 'src/app/services/register.service';
import { ConfirmPasswordValidator } from './confirm-password.validator';

@Component({
  selector: 'll-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
crafts;
formGroup:FormGroup;
  constructor(private craftService:CraftService,private registerService:RegisterService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loadForm();
    this.GetCrafts();
  }
  GetCrafts(){
    this.craftService.getCrafts().subscribe(res=>{
      
        this.crafts=res;
    },err=>{

    })
      
    
  }
  loadForm() {
    this.formGroup =this.registerService.handymanRegisterForm;
// this.initForm();

  }
  initForm() {
    this.registerService.handymanRegisterForm = this.fb.group(
      {
      
        Password: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(100),
          ]),
        ],
        CPassword: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(100),
          ]),
        ],
     //   agree: [false, Validators.compose([Validators.required])],
      },
      {
        validator: ConfirmPasswordValidator.MatchPassword,
      }
    );
  }






  
  // helpers for View
  isControlValid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName): boolean {
    debugger
    const control = this.formGroup.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName): boolean {
    const control = this.formGroup.controls[controlName];
    return control.dirty || control.touched;
  }

}
