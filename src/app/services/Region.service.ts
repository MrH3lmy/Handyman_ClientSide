import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  Controller = '/Region';
  constructor(private requestService: RequestService) {}
  getRegion() {
    return this.requestService.get(this.Controller) as Observable<any>;
  }
  createRegion(formData) {
    return this.requestService.post(this.Controller + '/', formData) as Observable<any>;
  }

  editRegion(id: number, formData) {
    return this.requestService.put(this.Controller + '/', id, formData) as Observable<any>;
  }

  deleteRegion(id) {
    return this.requestService.delete(this.Controller + '/', id) as Observable<any>;
  }
}
