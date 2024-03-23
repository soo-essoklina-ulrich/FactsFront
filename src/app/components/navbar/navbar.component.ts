import {Component, OnInit} from '@angular/core';
import {ToggleService} from "../service/toggle.service";
import {DecodeService} from "../../service/decode/decode.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  userinfo: any;
  constructor(
    private toggleService: ToggleService,
    private decodeService: DecodeService
  ) {
  }

  ngOnInit(): void {
    this.getInfos();
  }

  onClic() {
    this.toggleService.toggleSidebar();
  }

  getInfos() {
    const token = localStorage.getItem('bearer');
    if (token) {
      return this.userinfo =this.decodeService.parseJwt(token);
    }
  }

}
