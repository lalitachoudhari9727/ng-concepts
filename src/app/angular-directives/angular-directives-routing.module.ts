import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AngularDirectivesComponent} from './angular-directives.component';


const routes: Routes = [
  {path: '', component: AngularDirectivesComponent}
];

@NgModule({
  exports: [RouterModule],
  imports : [RouterModule.forChild(routes)]
})



export class AngularDirectivesRoutingModule {

}
