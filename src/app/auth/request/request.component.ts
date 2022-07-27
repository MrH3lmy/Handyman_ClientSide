import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
// import { RequestsService } from 'src/app/services/RequestS.service';
import { RequestService } from 'src/app/services/Request.service';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private registerService:RegisterService) {}

  ngOnInit(): void {}
}
