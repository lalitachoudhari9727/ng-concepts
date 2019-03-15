import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {
      path: 'template-driven',
      loadChildren: '../template-driven/template-driven.module#TemplateDrivenModule'
      },
      {
        path: 'reactive-form',
        loadChildren: '../reactive-form/reactive-form.module#ReactiveFormModule'
      },
      {
        path: 'directives',
        loadChildren: '../angular-directives/angular-directives.module#AngularDirectivesModule'
      },
      {
        path: 'pipes',
        loadChildren: '../implement-pipe/implement-pipe.module#ImplementPipeModule'
      },
      {
        path: '',
        redirectTo: 'template-driven',
        pathMatch: 'full'
      }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule {

}
