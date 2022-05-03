import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.sass'],
})
export class ContainerComponent implements OnInit {

  @HostBinding('class') class = 'block container mx-auto px-4';

  constructor() { }

  ngOnInit(): void {
  }

}
