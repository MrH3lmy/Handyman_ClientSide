// material.module.ts

import { NgModule } from '@angular/core';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [MatDatepickerModule, BrowserAnimationsModule],
  exports: [MatDatepickerModule, BrowserAnimationsModule],
  providers: [MatDatepickerModule]
})
export class MaterialModule {}
