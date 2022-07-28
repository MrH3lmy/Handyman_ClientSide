import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  Controller="/login"
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";



  constructor(private requestService:RequestService) { }
}
// loginform:FormGroup = new FormGroup({
// Email : new FormControl('',[Validators.required, Validators.pattern(this.emailPattern)]),
// password :(null,Validators.required),



// })
