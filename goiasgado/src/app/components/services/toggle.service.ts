import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  showButton = true;

  toggleButton() {
    this.showButton = !this.showButton;
  }

  constructor() { }
}
