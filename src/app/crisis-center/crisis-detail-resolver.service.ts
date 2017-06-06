import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot } from '@angular/router';

import { Crisis } from './crisis';
import { CrisisService } from './crisis.service';

@Injectable()
export class CrisisDetailResolver implements Resolve<Crisis>{
    constructor( private crisisService: CrisisService, private router: Router){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Crisis>{
        let id = route.params['id'];

        return this.crisisService.getCrisis(+id).then(crisis => {
            if(crisis){
                return crisis;
            }else {
                this.router.navigate(['/crisis-center',{error: id}]);
                return null;
            }
        })
    }
}