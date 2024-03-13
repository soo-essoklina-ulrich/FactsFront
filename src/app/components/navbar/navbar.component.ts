import { Component } from '@angular/core';
import {ToggleService} from "../service/toggle.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(
    private toggleService: ToggleService
  ) {
  }
  onClic() {
    this.toggleService.toggleSidebar();
  }

}
