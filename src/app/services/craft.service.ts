import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Path } from 'tsparticles/dist/Options/Classes/Particles/Move/Path/Path';
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
  getCraftbyid(Id){
    return this.requestService.getById(this.Controller +"/",Id) 
   }
  

}
