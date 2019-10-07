import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingMonitorComponent } from './starting-monitor.component';

describe('StartingMonitorComponent', () => {
  let component: StartingMonitorComponent;
  let fixture: ComponentFixture<StartingMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartingMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartingMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
