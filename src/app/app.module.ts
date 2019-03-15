import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {AuthGuard} from './auth.guard';
import {LoginModule} from './login/login.module';
import {Route} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [ AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {

}
