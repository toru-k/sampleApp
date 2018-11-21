import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterItemsComponent } from './footer-items.component';

describe('FooterItemsComponent', () => {
  let component: FooterItemsComponent;
  let fixture: ComponentFixture<FooterItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
