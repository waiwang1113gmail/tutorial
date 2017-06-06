import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Hero } from '../hero';
import { HeroService, HEROES } from '../hero.service';
import { slideInDownAnimation } from '../../animations';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  animations: [ slideInDownAnimation ]
})
export class HeroDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: HeroService) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }
  goBackHeroes() {
    let heroId = this.hero ? this.hero.id : null;
    this.router.navigate(["/heroes", { id: heroId }]);
  }
  @Input() hero: Hero;

}
