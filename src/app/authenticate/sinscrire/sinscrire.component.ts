import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormAuthService} from "../service/Authform/form-auth.service";
import {InscrireService} from "../service/inscrire/inscrire.service";
import {Utilisateur} from "../../models/utilisateur/utilisateur";
import {DecodeService} from "../../service/decode/decode.service";
import {NavigateService} from "../../service/navigationmodule/navigate.service";

@Component({
  selector: 'app-sinscrire',
  templateUrl: './sinscrire.component.html',
  styleUrl: './sinscrire.component.css'
})
export class SinscrireComponent implements OnInit{
  form! : FormGroup;
  ngOnInit(): void {
      this.CreateFrom();
  }
  constructor(
    private  formAuth: FormAuthService,
    private inscrireservice: InscrireService,
    private decode: DecodeService,
    private navigate: NavigateService
  ) {
  }

  CreateFrom() {
  this.form = this.formAuth.createForm();
  }
  onSubmit() {
    const email  : string = this.form.value.email;
    if (email.includes('@') && email.includes('.') && email.length > 5) {
      this.inscrireservice.save(this.form.value).subscribe(
        (res) => {
          localStorage.setItem('token', res.bearer);
          this.navigate.navigate(this.decode.parseJwt(res.bearer).role);
        },
        (error) => {
          console.log(error);
        }
      );
    }else {
      alert('email non valide');
    }

  }
}
