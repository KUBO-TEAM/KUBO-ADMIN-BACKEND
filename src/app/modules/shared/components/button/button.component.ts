import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent implements OnInit {

  @Input('title') title : string = 'Button';
  @Input('expand') expand : boolean = false;
  @Input('click') click : void = undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
