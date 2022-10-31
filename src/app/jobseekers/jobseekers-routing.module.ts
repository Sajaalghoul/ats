import { ProfilesModule } from './profiles/profiles.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'profiles',
    pathMatch:'full'
  },
  {
    path:'profiles',
    loadChildren: () => import('./profiles/profiles.module').then(m=> m.ProfilesModule)
  },
  {
    path:'jobs',
    loadChildren: () => import('./jobs/jobs.module').then(m=> m.JobsModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobseekersRoutingModule { }
