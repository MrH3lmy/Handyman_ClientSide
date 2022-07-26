import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CraftService } from 'src/app/services/craft.service';
import { RegisterService } from 'src/app/services/register.service';
import { ConfirmPasswordValidator } from '../confirm-password.validator';

@Component({
  selector: 'client-ll-signup',
  templateUrl: './client-sginup.component.html',
  styleUrls: ['./client-sginup.component.scss']
})
export class ClientSginupComponent implements OnInit {
  formGroup:FormGroup;

  constructor(private registerService:RegisterService,private fb:FormBuilder) {

   }

  ngOnInit(): void {
    this.loadForm();
  }
  loadForm() {
    this.formGroup =this.registerService.handymanRegisterForm;
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






  
  // helpers for View
//   isControlValid(controlName: string): boolean {
//     const control = this.formGroup.controls[controlName];
//     return control.valid && (control.dirty || control.touched);
//   }

//   isControlInvalid(controlName: string): boolean {
//     const control = this.formGroup.controls[controlName];
//     return control.invalid && (control.dirty || control.touched);
//   }

//   controlHasError(validation, controlName): boolean {
//     debugger
//     const control = this.formGroup.controls[controlName];
//     return control.hasError(validation) && (control.dirty || control.touched);
//   }

//   isControlTouched(controlName): boolean {
//     const control = this.formGroup.controls[controlName];
//     return control.dirty || control.touched;
//   }



// }
// function isControlValid(controlName: any, string: any) {
//   throw new Error('Function not implemented.');
// }

// function controlName(controlName: any, string: any) {
//   throw new Error('Function not implemented.');
// }

