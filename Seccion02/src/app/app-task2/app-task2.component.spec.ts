import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTask2Component } from './app-task2.component';

describe('AppTask2Component', () => {
  let component: AppTask2Component;
  let fixture: ComponentFixture<AppTask2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTask2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTask2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
