import {TemplateDrivenComponent} from './template-driven.component';
import {TemplateDrivenRoutingModule} from './template-driven-routing.module';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [TemplateDrivenComponent],
  imports: [CommonModule, TemplateDrivenRoutingModule,
    FormsModule],
  exports: []
})

export class TemplateDrivenModule {
}
