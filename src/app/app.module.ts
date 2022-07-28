import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ClientProfileComponent } from './client-profile/client-profile.component';
//import { ClientEditProfileComponent } from 'app/src/clientprofile/client-edit-profile/client-edit-profile.component';
//import { ClientProfileEditComponent } from './clientprofile/client-profile-edit/client-profile-edit.component';

@NgModule({
  declarations: [AppComponent, ClientProfileComponent, ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule, NgxSkeletonLoaderModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
