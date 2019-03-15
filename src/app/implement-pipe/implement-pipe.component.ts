import { Component, OnInit } from '@angular/core';
import {PipesPipe} from '../pipes/pipes.pipe';
import {Constants} from '../constants';

@Component({
  selector: 'app-implement-pipe',
  templateUrl: './implement-pipe.component.html',
  styleUrls: ['./implement-pipe.component.css'],
  providers: [PipesPipe]
})
export class ImplementPipeComponent implements OnInit {
  constant = Constants;
  searchString: string;
  isShowList: boolean;
  constructor() {
  }

  ngOnInit() {
  }

  onSearchClick() {
   this.isShowList = true;
  }
}
