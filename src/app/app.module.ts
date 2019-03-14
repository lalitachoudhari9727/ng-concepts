import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import {RouterModule, Routes} from '@angular/router';
import { AngularDirectivesComponent } from './angular-directives/angular-directives.component';
import { ChangeBackgroundColorDirective } from './angular-directives/custom-directive/change-background-color.directive';
import { ChangeImageDirective } from './angular-directives/custom-directive/change-image.directive';
import { PipesPipe } from './pipes/pipes.pipe';
import { ImplementPipeComponent } from './implement-pipe/implement-pipe.component';
import {AppRoutingModule} from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
