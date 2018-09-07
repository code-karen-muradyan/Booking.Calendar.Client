import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApponitmentComponent } from './apponitment.component';

describe('ApponitmentComponent', () => {
  let component: ApponitmentComponent;
  let fixture: ComponentFixture<ApponitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApponitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApponitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
