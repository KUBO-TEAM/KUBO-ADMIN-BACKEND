import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.sass']
})
export class CheckboxComponent implements OnInit {


  @Input('value') value : string  = '';
  @Output('change') change = new EventEmitter<{checked: boolean, value: string }>();

  constructor() { }

  toggleNewItem($event: MatCheckboxChange){

    this.change.emit({
      checked: $event.checked,
      value: this.value,
    });
  }

  ngOnInit(): void {
  }

}
