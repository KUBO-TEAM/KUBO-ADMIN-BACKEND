import { Component, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor  {

  @Input('placeholder') placeholder : string = 'Input placeholder';
  @Input('type') type : string = 'text';
  @Input('value') value : any;

  onChange: any = () => { };
  onTouched: any = () => { };

  constructor() { }

  ngOnInit(): void {
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  change( $event : any ) {
    this.onChange($event.target.value);
  }
}
