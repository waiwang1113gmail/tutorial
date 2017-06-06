import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

const routes: Routes = [ 
  { path: "", redirectTo: '/heroes', pathMatch: 'full'},
  { path: "**", component: PageNotFoundComponent },
  {
  path: 'compose',
  component: ComposeMessageComponent,
  outlet: 'popup'
},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: [ 
  ]
})
export class AppRoutingModule { }
