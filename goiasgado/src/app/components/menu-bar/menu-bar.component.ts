import { Component } from '@angular/core';
import { ToggleService } from '../services/toggle.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

  toggleValue: boolean; 

  constructor(private toggleService: ToggleService) {
    this.toggleValue = toggleService.showButton;
  }

  toggleButton() {
    this.toggleValue = true;
  }
}