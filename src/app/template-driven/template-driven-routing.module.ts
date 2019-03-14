import {RouterModule, Routes} from '@angular/router';
import {TemplateDrivenComponent} from './template-driven.component';
import {NgModule} from '@angular/core';

const routes: Routes = [{
  path: '', component: TemplateDrivenComponent
}];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})

export class TemplateDrivenRoutingModule {
}
