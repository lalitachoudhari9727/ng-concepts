import {NgModule} from '@angular/core';
import {ImplementPipeComponent} from './implement-pipe.component';
import {ImplementPipeRoutingModule} from './implement-pipe-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PipesPipe} from '../pipes/pipes.pipe';


@NgModule({
  declarations: [ImplementPipeComponent, PipesPipe],
  imports: [ImplementPipeRoutingModule, CommonModule, FormsModule, ReactiveFormsModule ]
})

export class ImplementPipeModule {

}
