import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TemplateDrivenModule} from './template-driven/template-driven.module';
import {ReactiveFormModule} from './reactive-form/reactive-form.module';
import {AngularDirectivesModule} from './angular-directives/angular-directives.module';
import {ImplementPipeModule} from './implement-pipe/implement-pipe.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: '../app/template-driven/template-driven.module#TemplateDrivenModule'
  },
  {
    path: 'template-driven',
    loadChildren: '../app/template-driven/template-driven.module#TemplateDrivenModule'
  },
  {
    path: 'reactive-form',
    loadChildren: '../app/reactive-form/reactive-form.module#ReactiveFormModule'
  },
  {
    path: 'directives',
    loadChildren: '../app/angular-directives/angular-directives.module#AngularDirectivesModule'
  },
  {
    path: 'pipes',
    loadChildren: '../app/implement-pipe/implement-pipe.module#ImplementPipeModule'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
