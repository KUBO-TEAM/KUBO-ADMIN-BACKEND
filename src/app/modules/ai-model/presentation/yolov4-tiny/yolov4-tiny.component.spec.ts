import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Yolov4TinyComponent } from './yolov4-tiny.component';

describe('Yolov4TinyComponent', () => {
  let component: Yolov4TinyComponent;
  let fixture: ComponentFixture<Yolov4TinyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Yolov4TinyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Yolov4TinyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
