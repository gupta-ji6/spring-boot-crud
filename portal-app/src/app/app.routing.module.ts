import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import {AddUserComponent} from './user/add-user.component';
import {MentorComponent} from './mentor/mentor.component';
import {AddMentorComponent}  from './mentor/add-mentor.component';
import { AddSkillComponent } from './skill/add-skill.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'mentors', component: MentorComponent },
  { path: 'add-mentor', component: AddMentorComponent },
  { path: 'skills', component: SkillComponent },
  { path: 'add-skill', component: AddSkillComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
