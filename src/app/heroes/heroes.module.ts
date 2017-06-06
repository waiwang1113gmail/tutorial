import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';   

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesRoutingModule } from './heroes-routing.module';

@NgModule({
  imports: [ 
    CommonModule,
    FormsModule,
    HeroesRoutingModule, 
  ],
  exports: [ HeroesRoutingModule ],
  providers: [ HeroService ],
  declarations: [HeroListComponent, HeroDetailComponent]
})
export class HeroesModule { }
