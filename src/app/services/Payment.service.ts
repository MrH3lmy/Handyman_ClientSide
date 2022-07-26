import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  Controller = '/Payment';
  constructor(private requestService: RequestService) {}
  getPayment() {
    return this.requestService.get(this.Controller) as Observable<any>;
  }
  createPayment(formData) {
    return this.requestService.post(this.Controller + '/', formData) as Observable<any>;
  }

  editPayment(id: number, formData) {
    return this.requestService.put(this.Controller + '/', id, formData) as Observable<any>;
  }

  deletePayment(id) {
    return this.requestService.delete(this.Controller + '/', id) as Observable<any>;
  }
}
