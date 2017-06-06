import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes, ActivatedRoute } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuardService } from '../shared/shared.module';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';
const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [ AuthGuardService ],
        children: [
            {
                path:'',
                canActivateChild: [AuthGuardService],
                children: [
                    { path: 'crises', component: ManageCrisesComponent },
                    { path: 'heroes', component: ManageHeroesComponent },
                    { path: '', component: AdminDashboardComponent }
                ]
            }
        ]
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [ AuthGuardService ]
})
export class AdminRoutingModule{}