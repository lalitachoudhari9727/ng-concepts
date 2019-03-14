import {RouterModule, Routes} from '@angular/router';
import {ImplementPipeComponent} from './implement-pipe.component';
import {NgModule} from '@angular/core';


const routes: Routes = [{
  path: '', component: ImplementPipeComponent
}];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})

export class ImplementPipeRoutingModule {

}
