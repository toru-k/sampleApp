import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingTimeCardComponent } from './working-time-card.component';

describe('WorkingTimeCardComponent', () => {
  let component: WorkingTimeCardComponent;
  let fixture: ComponentFixture<WorkingTimeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingTimeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingTimeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
