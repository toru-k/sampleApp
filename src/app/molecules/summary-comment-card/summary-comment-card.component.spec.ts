import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryCommentCardComponent } from './summary-comment-card.component';

describe('SummaryCommentCardComponent', () => {
  let component: SummaryCommentCardComponent;
  let fixture: ComponentFixture<SummaryCommentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryCommentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryCommentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
