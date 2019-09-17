import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {AddUserComponent} from './user/add-user.component';
import {MentorComponent} from './mentor/mentor.component';
import {AddMentorComponent}  from './mentor/add-mentor.component';
import { SkillComponent } from './skill/skill.component';
import { AddSkillComponent } from './skill/add-skill.component';
import { AppRoutingModule } from './app.routing.module';
import {UserService} from './user/user.service';
import {MentorService} from './mentor/mentor.service';
import {HttpClientModule} from "@angular/common/http";
import { SkillService } from './skill/skill.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    MentorComponent,
    AddMentorComponent,
    SkillComponent,
    AddSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, MentorService, SkillService],
  bootstrap: [AppComponent]
})
export class AppModule { }
