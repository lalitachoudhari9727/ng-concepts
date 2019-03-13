import { Component, OnInit } from '@angular/core';
import {PipesPipe} from '../pipes/pipes.pipe';

@Component({
  selector: 'app-implement-pipe',
  templateUrl: './implement-pipe.component.html',
  styleUrls: ['./implement-pipe.component.css'],
  providers: [PipesPipe]
})
export class ImplementPipeComponent implements OnInit {
  order = 'title';
  constructor() {
  }

  items = [
    { title: 'third', value: 'three', digit: 44 },
    { title: 'second', value: 'two', digit: 14 },
    { title: 'first', value: 'one', digit: 100 },
  ];


  ngOnInit() {
  }

}
