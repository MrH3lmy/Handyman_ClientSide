import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from 'src/app/auth/signup/confirm-password.validator';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  Controller="/Identity"
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private requestService:RequestService) { 
    
  }

  handymanRegisterForm:FormGroup = new FormGroup({
  
    //Id :new FormControl(0),
    Handyman_Name :new FormControl(null,Validators.required),
    Handyman_SSN :new FormControl(null),
    Region_ID :new FormControl(null),
    Handyman_Photo :new FormControl(''),
    Handyman_ID_Image:new FormControl(''),
    Handyman_Criminal_Record:new FormControl(''),
    CraftID :new FormControl(null),
    Handyman_Fixed_Rate:new FormControl(null),
    Handyman_Email :new FormControl('',[Validators.required, Validators.pattern(this.emailPattern)]),
    Handyman_Mobile :new FormControl('',Validators.compose([Validators.maxLength(11),Validators.required])),
    Password:new FormControl('',Validators.required),
   CPassword:new FormControl('',[Validators.required]),
  });
 
  clientRegisterForm:FormGroup = new FormGroup({
  
   // Id :new FormControl(0),
    Client_name :new FormControl('',Validators.required),
    Client_Address :new FormControl(''),
    Region_ID:new FormControl(null),
    Client_Email :new FormControl('',[Validators.required, Validators.pattern(this.emailPattern)]),
    Client_Mobile :new FormControl(''/*,[Validators.required/,Validators.pattern(this.phoneNumber) ]*/),
    Password:new FormControl('',Validators.required),
    
  }
  );
  
 
  initializeFormGroup(){
    this.handymanRegisterForm.reset();
  this.handymanRegisterForm.setValue({
    Handyman_Name :'',
    Handyman_SSN : null,
    Region_ID : null,
    Handyman_Email : '',
    Handyman_Mobile : '',
    Handyman_ID_Image:'',
    Handyman_Photo : '',
    Handyman_Criminal_Record : '',
    CraftID : null,
    Handyman_Fixed_Rate : null,
    Password:'',
    //CPassword:''



  });
  }
  initializeFormGroupClient(){
    this.clientRegisterForm.reset();
  this.clientRegisterForm.setValue({
    Id :0,
    Client_name :'',
    Region_ID : null,
    Client_Email : '',
    Client_Mobile : '',
    Client_Address:'',
    Password:'',



  });
  }
  

  Createregister(formData){
    return this.requestService.post("/Register/Handyman",formData) ;
  }
  UploadFile(formData,ssn){
    return this.requestService.post("/Handyman/UploadFile?ssn="+ssn,formData);
  }
  
  Createregisterclient(formData){
    debugger;
    return this.requestService.post("/Register/client",formData) ;
  }
}
