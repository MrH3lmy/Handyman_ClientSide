import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  Controller = '/Schedule';
  constructor(private requestService: RequestService) {}
  getSchedule() {
    return this.requestService.get(this.Controller) as Observable<any>;
  }
  createSchedule(formData) {
    return this.requestService.post(this.Controller + '/', formData) as Observable<any>;
  }

  editSchedule(id: number, formData) {
    return this.requestService.put(this.Controller + '/', id, formData) as Observable<any>;
  }

  deleteSchedule(id) {
    return this.requestService.delete(this.Controller + '/', id) as Observable<any>;
  }
}
