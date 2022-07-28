import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class HandymanService {
  Controller = '/Handyman';
  constructor(private requestService: RequestService) {}
  getHandymen() {
    return this.requestService.get(this.Controller) as Observable<any>;
  }
  createHandymen(formData) {
    return this.requestService.post(this.Controller + '/', formData) as Observable<any>;
  }

  editHandymen(id: number, formData) {
    return this.requestService.put(this.Controller + '/', id, formData) as Observable<any>;
  }

  deleteHandymen(id) {
    return this.requestService.delete(this.Controller + '/', id) as Observable<any>;
  }
}
