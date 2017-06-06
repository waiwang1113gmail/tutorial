import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service'; 
import { slideInDownAnimation } from '../../animations';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css'],
  animations: [ slideInDownAnimation ]
})
export class CrisisDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getCrisis(+params['id']))
      .subscribe(crisis => this.crisis = crisis);
  }
  goBackCrisis() {
    let crisisId = this.crisis ? this.crisis.id : null;
    this.router.navigate(["../", { id: crisisId,foo: 'foo' }],{relativeTo: this.route});
  }
  @Input() crisis: Crisis;

}
