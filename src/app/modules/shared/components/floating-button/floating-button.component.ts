import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.sass']
})
export class FloatingButtonComponent implements OnInit {

  @Input('click') click: void = undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
