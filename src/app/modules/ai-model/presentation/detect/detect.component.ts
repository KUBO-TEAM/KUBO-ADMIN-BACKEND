import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detect',
  templateUrl: './detect.component.html',
  styleUrls: ['./detect.component.sass']
})
export class DetectComponent implements OnInit {

  imgSrc!: any;

  constructor() { }

  ngOnInit(): void {
  }


  fileChangeEvent(event: any) {
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];

        const reader = new FileReader();
        reader.onload = e => this.imgSrc = reader.result;

        reader.readAsDataURL(file);
    }
  }

  detect(){

  }

}
