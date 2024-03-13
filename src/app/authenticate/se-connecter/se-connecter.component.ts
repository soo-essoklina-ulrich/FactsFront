import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormAuthService } from '../service/Authform/form-auth.service';
import { FormGroup } from '@angular/forms';
import {ConnectService} from "../service/connect/connect.service";
import {DecodeService} from "../../service/decode/decode.service";
import {NavigateService} from "../../service/navigationmodule/navigate.service";

@Component({
  selector: 'app-se-connecter',
  templateUrl: './se-connecter.component.html',
  styleUrl: './se-connecter.component.css',
})
export class SeConnecterComponent implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
    this.createForm();
    this.autoLogin();
  }

  constructor(
    private decode: DecodeService,
    private connectservice: ConnectService,
    private authService: FormAuthService, private router: Router,
    private navigate: NavigateService
  ) {}

  createForm() {
    this.form = this.authService.connectForm();
  }

  autoLogin() {
    let bearer = localStorage.getItem('bearer');
    if (bearer) {
      if (this.decode.parseJwt(bearer).exp * 1000 - Date.now() < 0) {
        localStorage.removeItem('bearer');
      } else {
        this.navigate.navigate(this.decode.parseJwt(bearer).role);
      }
    }
  }


  onSubmit() {

    this.connectservice.connect(this.form.value).subscribe(
      (res) => {
        localStorage.setItem('bearer', res.bearer);
        this.navigate.navigate(this.decode.parseJwt(res.bearer).role);
      },
      (error) => {
        console.log(error);
      }
    );
    this.form.reset()
  }


}
