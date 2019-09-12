import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {MentorComponent} from './mentor/mentor.component';
import { AppRoutingModule } from './app.routing.module';
import {UserService} from './user/user.service';
import {MentorService} from './mentor/mentor.service';
import {HttpClientModule} from "@angular/common/http";
import {AddUserComponent} from './user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MentorComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, MentorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
