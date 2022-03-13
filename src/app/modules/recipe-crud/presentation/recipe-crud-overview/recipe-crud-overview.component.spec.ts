import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCrudOverviewComponent } from './recipe-crud-overview.component';

describe('RecipeCrudOverviewComponent', () => {
  let component: RecipeCrudOverviewComponent;
  let fixture: ComponentFixture<RecipeCrudOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeCrudOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCrudOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
