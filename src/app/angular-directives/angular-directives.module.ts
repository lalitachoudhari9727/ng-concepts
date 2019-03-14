import {NgModule} from '@angular/core';
import {AngularDirectivesComponent} from './angular-directives.component';
import {AngularDirectivesRoutingModule} from './angular-directives-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChangeImageDirective} from './custom-directive/change-image.directive';
import {ChangeBackgroundColorDirective} from './custom-directive/change-background-color.directive';
import { HighlightDirective } from './custom-directive/highlight.directive';


@NgModule({
  declarations: [AngularDirectivesComponent, ChangeImageDirective, ChangeBackgroundColorDirective, HighlightDirective],
  imports: [AngularDirectivesRoutingModule, CommonModule, FormsModule, ReactiveFormsModule]
})


export class AngularDirectivesModule {

}
