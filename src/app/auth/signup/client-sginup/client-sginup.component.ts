import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CraftService } from 'src/app/services/craft.service';
import { RegisterService } from 'src/app/services/register.service';
//import { ConfirmPasswordValidator } from './confirm-password.validator';

@Component({
  selector: 'client-ll-signup',
  templateUrl: './client-sginup.component.html',
  styleUrls: ['./client-sginup.component.scss']
})
export class ClientSginupComponent implements OnInit {
  formGroup:FormGroup;

  constructor() { }

  ngOnInit(): void {
  }
  

}
