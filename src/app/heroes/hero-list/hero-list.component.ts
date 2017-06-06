import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({ 
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes: Observable<Hero[]>;
  private selectedId: number;

  constructor(private heroService: HeroService,
    private router: Router,
    private route: ActivatedRoute) { }
 

  ngOnInit(): void {
    this.heroes = this.route.params
      .switchMap((params: Params) =>{
        this.selectedId = +params['id'];
        return this.heroService.getHeroes();
      })
  }

  onSelect(hero: Hero): void {
    this.router.navigate(['/hero', hero.id]);
  }

}
