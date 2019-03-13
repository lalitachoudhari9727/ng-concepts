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
 const routes: Routes = [
   { path: '', redirectTo: 'templateDriven', pathMatch: 'full' },
    { path: 'templateDriven', component: TemplateDrivenComponent },
    { path: 'reactiveForm', component: ReactiveFormComponent },
    { path: 'directives',
      component: AngularDirectivesComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent,
    AngularDirectivesComponent,
    ChangeBackgroundColorDirective,
    ChangeImageDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
