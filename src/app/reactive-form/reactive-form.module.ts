import {NgModule} from '@angular/core';
import {ReactiveFormRoutingModule} from './reactive-form-routing.module';
import {ReactiveFormComponent} from './reactive-form.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [CommonModule, ReactiveFormRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [ReactiveFormComponent]
})

export class ReactiveFormModule {

}
