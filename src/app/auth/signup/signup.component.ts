import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CraftService } from 'src/app/services/craft.service';
import { RegisterService } from 'src/app/services/register.service';
import { ConfirmPasswordValidator } from './confirm-password.validator';
import { RxFormGroup,RxFormBuilder,FormGroupExtension } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'll-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
crafts;
formGroup:FormGroup;
emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
phonePattern="^([0-9]{11})$"
ssn:string
  constructor(private craftService:CraftService,private registerService:RegisterService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    debugger
    this.initForm();

    this.GetCrafts();
  }
  GetCrafts(){
    this.craftService.getCrafts().subscribe(res=>{
      
        this.crafts=res;
    },err=>{

    })
      
    
  }
  loadForm() {
    debugger
    this.formGroup =this.registerService.handymanRegisterForm;
// this.initForm();

  }
  initForm() {
    debugger
    this.formGroup = this.fb.group(
      {
        Handyman_Name: [null,
          Validators.compose([
            Validators.required
         
          ])
        ],
        Handyman_SSN : [null],
        
        Region_ID : [null],
 
        //Handyman_Photo :[null],
        Handyman_PhotoResource :[null],
        Handyman_PhotoSource :[null],
        Handyman_ID_ImageResource:[null],
        Handyman_ID_Image:[null],
        Handyman_Criminal_RecordResource:[null],
        Handyman_Criminal_Record:[null],
        CraftID : [null,
          Validators.compose([
            Validators.required
         
          ])
        ],
        Handyman_Fixed_Rate: [null,
          Validators.compose([
            Validators.required
         
          ])
        ],
        Handyman_Email    : ['',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.emailPattern)
        ])
      ],
        Handyman_Mobile : ['',
        Validators.compose([
          Validators.required,
          //Validators.pattern(this.phonePattern)
        ])
      ],
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
       agree: [false, Validators.compose([Validators.required])],
      },
      {
        validator: ConfirmPasswordValidator.MatchPassword,
      }
      );
    debugger
  }


  onFileChange(event) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formGroup.patchValue({
        Handyman_PhotoResource: file
      });
    }
  }
  onFileChangeId(event) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formGroup.patchValue({
        Handyman_ID_ImageResource: file
      });
    }
  }
  onFileChangeCrimnal(event) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formGroup.patchValue({
        Handyman_Criminal_RecordResource: file
      });
    }
  }
  Upload(){
    const formData = new FormData();
    formData.append('files', this.formGroup.get('Handyman_PhotoResource').value);
    formData.append('files', this.formGroup.get('Handyman_ID_ImageResource').value);
    formData.append('files', this.formGroup.get('Handyman_Criminal_RecordResource').value);
   
  this.registerService.UploadFile(formData,this.ssn).subscribe(res=>{
    this.router.navigate(['/']);
  },err=>{

  })
  }
  submit(){
    debugger
    var namecrimnal=this.formGroup.controls["Handyman_Criminal_RecordResource"].value==null?null:
    this.formGroup.controls["Handyman_Criminal_RecordResource"].value.name
    var namephoto=this.formGroup.controls["Handyman_PhotoResource"].value==null?null:
    this.formGroup.controls["Handyman_PhotoResource"].value.name
    var Handyman_ID_Image=this.formGroup.controls["Handyman_ID_ImageResource"].value==null?null:
    this.formGroup.controls["Handyman_ID_ImageResource"].value.name
   
   this.formGroup.patchValue({
    Handyman_Criminal_Record: namecrimnal,
    Handyman_Photo: namephoto,
    Handyman_ID_Image:Handyman_ID_Image

  });
    this.registerService.Createregister(this.formGroup.value).subscribe(res=>{
      debugger
      this.ssn=this.formGroup.controls["Handyman_SSN"].value
      this.Upload()
     
    },err=>{

    })
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
    const control = this.formGroup.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName): boolean {
    const control = this.formGroup.controls[controlName];
    return control.dirty || control.touched;
  }

}
