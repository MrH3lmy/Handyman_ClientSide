import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

readonly rootUrl =environment.apiUrl;

  constructor(private http:HttpClient ) { 

  }
  post(controller:string,obj){
        return this.http.post(this.rootUrl+controller,obj);

  }
 
  get(controller:string){
    return this.http.get(this.rootUrl+controller);
   }  
   getByName(controller:string,value:string){
    return this.http.get(this.rootUrl+controller+"/"+value);
   }  
   getById(controller:string,id:number){
    return this.http.get(this.rootUrl+controller+"/"+id);
   }  
   delete(controller,id:number){
    return this.http.delete(this.rootUrl+controller+"/"+id);
   }  
   put(controller,id:number,obj){
    return this.http.put(this.rootUrl+controller+"/"+id,obj);
   }

}
