import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.sass'],
})
export class ContainerComponent implements OnInit {

  @HostBinding('class') class = 'block container mx-auto py-3 px-4 lg:px-0';

  constructor() { }

  ngOnInit(): void {
  }

}
