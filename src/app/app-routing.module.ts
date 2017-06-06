import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AuthGuardService } from './shared/shared.module';

const routes: Routes = [
  { path: "", redirectTo: '/heroes', pathMatch: 'full' }, 
  { path: "admin", loadChildren: 'app/admin/admin.module#AdminModule',canLoad: [AuthGuardService] },
  { path: "crisis-center", loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule' },
  { path: "**", component: PageNotFoundComponent},
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule],
  declarations: [
  ]
})
export class AppRoutingModule { }
