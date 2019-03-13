import {Directive, HostBinding, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appChangeImage]'
})
export class ChangeImageDirective implements OnChanges {
@Input() techName: string;

constructor() { }

@HostBinding('src') imageSource;

ngOnChanges(changes: SimpleChanges) {
 /* if (changes && changes.techName && changes.techName.currentValue) {
    this.techName = changes.techName.currentValue;
  }*/
  this.imageSource = './assets/Technology Logos/' + this.getImageSource() + '.png';
}

getImageSource() {
  switch (this.techName) {
    case 'angular': return 'angular';
    case 'nodejs' : return 'nodejs';
    case 'mongodb' : return 'mongodb';
    default: return 'js';
  }
}

}
