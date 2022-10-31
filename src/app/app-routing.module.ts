import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'dashboard',
    loadChildren:() => import('./dashboard/dashboard.module').then(m=>m.DashboardModule),
  },
  {
    path:'folders',
    loadChildren:() => import('./folders/folders.module').then(m=>m.FoldersModule),
  },
  {
    path:'interviews',
    loadChildren:() => import('./interviews/interviews.module').then(m=>m.InterviewsModule),
  },
  {
    path:'jobs',
    loadChildren:() => import('./jobs/jobs.module').then(m=>m.JobsModule),
  },
  {
    path:'jobseekers',
    loadChildren:() => import('./jobseekers/jobseekers.module').then(m=>m.JobseekersModule),
  },
  {
    path:'search',
    loadChildren:() => import('./search/search.module').then(m=>m.SearchModule),
  },
  {
    path:'settings',
    loadChildren:() => import('./settings/settings.module').then(m=>m.SettingsModule),
  },
  {
    path:'shared',
    loadChildren:() => import('./shared/shared.module').then(m=>m.SharedModule),
  },
  {
    path:'users',
    loadChildren:() => import('./users/users.module').then(m=>m.UsersModule),
  },
  {
    path:'companies',
    loadChildren:() => import('./companies/companies.module').then(m=>m.CompaniesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
