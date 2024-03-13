import {Injectable} from '@angular/core';
import {DecodeService} from "../decode/decode.service";
import {NavigateService} from "../navigationmodule/navigate.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class ChecktokenService {

  constructor() { }


  chekToken(decode: DecodeService, navigate: NavigateService, router:Router) {
    let token = localStorage.getItem('bearer');
    if (token) {
      if (decode.parseJwt(token).exp * 1000 - Date.now() < 0) {
        localStorage.removeItem('bearer');
        router.navigate(['auth/se-connecter']).then(r => console.log('token expired'));
      } else {
        navigate.navigate(decode.parseJwt(token).role);
      }

    }
    else {
      router.navigate(['auth/se-connecter']).then(r => console.log('token not exist'));

    }
  }
}
