import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';   
import { CommonModule } from '@angular/common';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisService } from './crisis.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisisCenterRoutingModule
  ],
  providers: [ CrisisService],
  exports: [ ],
  declarations: [CrisisListComponent, CrisisDetailComponent, CrisisCenterHomeComponent, CrisisCenterComponent ]
})
export class CrisisCenterModule { }
