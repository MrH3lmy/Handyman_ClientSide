import { Component, OnInit } from '@angular/core';
import { productsDB } from '../../shared/data/products';
import { HandymanService } from 'src/app/services/Handyman.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'll-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  isLoaded: boolean;
  advanceSearchExpanded: boolean = false;
  products = [];
  Handymens: any;
 constructor(private HandymanService:HandymanService,private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
  
    this.GetHandymen();
  }
  GetHandymen(){
    this.HandymanService.getHandymen().subscribe(res=>{
      debugger
        this.Handymens=res;
        this.Handymens.forEach(element => {
          debugger
          let objectURL = 'data:image/png;base64,' + element.handyman_PhotoByte;
          element.handyman_PhotoByte = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        });
      
        this.isLoaded = true
    },err=>{

    })
}}
