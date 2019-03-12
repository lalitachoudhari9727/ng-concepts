import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import {RouterModule, Routes} from '@angular/router';
 const routes: Routes = [

    { path: 'templateDriven', component: TemplateDrivenComponent },
    { path: 'reactiveForm', component: ReactiveFormComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent
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
