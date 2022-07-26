import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  Controller = '/Request';
  constructor(private requestService: RequestService) {}
  getRequest() {
    return this.requestService.get(this.Controller) as Observable<any>;
  }
  createRequest(formData) {
    return this.requestService.post(this.Controller + '/', formData) as Observable<any>;
  }

  editRequest(id: number, formData) {
    return this.requestService.put(this.Controller + '/', id, formData) as Observable<any>;
  }

  deleteRequest(id) {
    return this.requestService.delete(this.Controller + '/', id) as Observable<any>;
  }
}
