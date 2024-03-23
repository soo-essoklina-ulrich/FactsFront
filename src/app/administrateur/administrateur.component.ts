import {Component, OnInit} from '@angular/core';
import {ToggleService} from "../components/service/toggle.service";
import {ChecktokenService} from "../service/checktoken/checktoken.service";
import {DecodeService} from "../service/decode/decode.service";
import {NavigateService} from "../service/navigationmodule/navigate.service";
import {Router} from "@angular/router";
import {RefreshtokenService} from "../service/refreshtoken/refreshtoken.service";

@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrl: './administrateur.component.css'
})
export class AdministrateurComponent implements OnInit
{
  toggleClassisVisiblee = false;
  constructor(
    private toggleService: ToggleService,
    private chektoken: ChecktokenService,
    private decode : DecodeService,
    private navigate: NavigateService,
    private refreshtoken: RefreshtokenService,
    private router: Router
    ) {
  }
  ngOnInit(): void {
    this.toggleService.toggleSidebarSubject.subscribe(() => {
      this.toggleClass();
    });
    this.chektoken.chekToken(this.decode, this.navigate, this.router, this.refreshtoken);
  }


  private toggleClass() {
    this.toggleClassisVisiblee = !this.toggleClassisVisiblee;
  }
}
