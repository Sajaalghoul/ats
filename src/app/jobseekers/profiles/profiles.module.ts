import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { EducationsComponent } from './educations/educations.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { EducationAddComponent } from './educations/education-add/education-add.component';
import { ExperienceAddComponent } from './experiences/experience-add/experience-add.component';
import { LanguagesComponent } from './languages/languages.component';
import { LangaugesAddComponent } from './languages/langauges-add/langauges-add.component';
import { SkillsComponent } from './skills/skills.component';
import { AddSkillsComponent } from './skills/add-skills/add-skills.component';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    ProfileComponent,
    ProfileInfoComponent,
    EducationsComponent,
    ExperiencesComponent,
    EducationAddComponent,
    ExperienceAddComponent,
    LanguagesComponent,
    LangaugesAddComponent,
    SkillsComponent,
    AddSkillsComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    ProfilesRoutingModule,
    SharedModule
  ]
})
export class ProfilesModule { }
