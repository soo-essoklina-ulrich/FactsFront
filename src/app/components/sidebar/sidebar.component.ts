import {Component, OnInit} from '@angular/core';
import {DecodeService} from "../../service/decode/decode.service";
import {DeconnectService} from "../../service/deconnexion/deconnect.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  userinfo: any;

  constructor(
    private decodeService: DecodeService,
    private DeconnectService: DeconnectService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.isAdmin();
  }


  isAdmin() {
    let token = localStorage.getItem('bearer');
    if (token) {
      return this.decodeService.parseJwt(token).role == 'ADMINISTRATEUR';
    }
    return false;
  }

  Deconnexion() {
    this.DeconnectService.Deconnexion().subscribe((res) => {
        localStorage.removeItem('bearer');
        localStorage.removeItem('refreshToken');
        this.router.navigate(['auth/se-connecter']).then(r => console.log('deconnexion'));
      },
      error => {
        console.log(error);
      });
  }
}
