import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'll-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
formGroup:FormGroup;


  constructor(private loginservices:LoginService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();

  }
  initForm() {
    this.formGroup = this.fb.group(
      {

}
)};
loadForm() {
  //this.formGroup =this.loginservices.loginform;
// this.initForm();

}
}
