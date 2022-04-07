import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }

  loadingStatus : boolean = false;

  toggleLoadingStatus(){
    this.loadingStatus = !this.loadingStatus;
  }

}
