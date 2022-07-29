import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class CraftService {
  
  Controller="/Craft"
  constructor(private requestService:RequestService) {
    
   }
  getCrafts(){
   return this.requestService.get(this.Controller) as Observable<any>
  }
  

}
