import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module'; 
import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AdminModule } from './admin/admin.module';

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
    CrisisCenterModule,
    AdminModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
