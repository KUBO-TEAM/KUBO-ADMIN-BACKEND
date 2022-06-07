import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacksTableComponent } from './feedbacks-table.component';

describe('FeedbacksTableComponent', () => {
  let component: FeedbacksTableComponent;
  let fixture: ComponentFixture<FeedbacksTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbacksTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbacksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
