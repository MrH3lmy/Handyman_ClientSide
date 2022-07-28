import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/Client.service';
import { RequestsService } from '../services/RequestS.service';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {

  client;
  constructor(private ClientService:ClientService, private requestservice:RequestsService) { }

  ngOnInit(): void {
  }
  getClientByID(id){
    this.ClientService.getClientbyId(id).subscribe(res=>{
      
        this.client=res;
    },err=>{

    })

}}
