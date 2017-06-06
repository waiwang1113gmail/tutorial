import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { slideInDownAnimation } from '../../animations';
import { DialogService } from '../../dialog.service';
import { CanComponentDeactivate } from '../../shared/shared.module';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css'],
  animations: [slideInDownAnimation]
})
export class CrisisDetailComponent implements OnInit, CanComponentDeactivate {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  @Input() editName: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService,
    private dialogService: DialogService) { }

  ngOnInit() {
    this.route.data.subscribe((data: {crisis: Crisis}) =>{
      this.editName = data.crisis.name;
      this.crisis = data.crisis;
    }) 
  }
  goBackCrisis() {
    let crisisId = this.crisis ? this.crisis.id : null;
    this.router.navigate(["../", { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
  }

  cancel() {
    this.goBackCrisis();
  }

  save() {
    this.crisis.name = this.editName;
    this.goBackCrisis();
  }

  canDeactivate(): Promise<boolean> | boolean {
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }

    return this.dialogService.confirm('Discard changes?');
  }

  @Input() crisis: Crisis;
 
}
