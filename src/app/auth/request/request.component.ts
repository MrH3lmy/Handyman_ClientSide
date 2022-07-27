import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestsService } from 'src/app/services/RequestS.service';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  formGroup: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
