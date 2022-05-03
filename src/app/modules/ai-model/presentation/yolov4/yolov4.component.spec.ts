import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Yolov4Component } from './yolov4.component';

describe('Yolov4Component', () => {
  let component: Yolov4Component;
  let fixture: ComponentFixture<Yolov4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Yolov4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Yolov4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
