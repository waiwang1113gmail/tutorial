import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({ 
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  crises: Observable<Crisis[]>;
  componentError: string;
  private selectedId: number;
  constructor(private crisisService: CrisisService,
    private router: Router,
    private route: ActivatedRoute) { }
 

  ngOnInit(): void {
    this.crises = this.route.params
      .switchMap((params: Params) =>{
        this.componentError = params['error']? `Crisis not found for id ${params['error']}`:null;
        this.selectedId = +params['id'];
        return this.crisisService.getCrises();
      })
  }

  onSelect(crisis: Crisis): void {
    this.selectedId = crisis.id;
    this.router.navigate([crisis.id],{relativeTo: this.route});
  }

}
