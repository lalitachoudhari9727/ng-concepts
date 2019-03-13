import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementPipeComponent } from './implement-pipe.component';

describe('ImplementPipeComponent', () => {
  let component: ImplementPipeComponent;
  let fixture: ComponentFixture<ImplementPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplementPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
