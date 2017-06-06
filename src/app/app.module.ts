import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';  
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';  
import { DialogService } from './dialog.service';

import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent, 
    PageNotFoundComponent, ComposeMessageComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    FormsModule,
    HeroesModule, 
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ DialogService ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
 }
