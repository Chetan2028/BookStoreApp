import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LrheaderComponent } from './lrheader.component';

describe('LrheaderComponent', () => {
  let component: LrheaderComponent;
  let fixture: ComponentFixture<LrheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LrheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LrheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
