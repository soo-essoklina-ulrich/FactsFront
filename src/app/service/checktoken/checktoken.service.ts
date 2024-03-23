import {Injectable} from '@angular/core';
import {DecodeService} from "../decode/decode.service";
import {NavigateService} from "../navigationmodule/navigate.service";
import {Router} from "@angular/router";
import {RefreshtokenService} from "../refreshtoken/refreshtoken.service";

@Injectable({
  providedIn: 'root',
})
export class ChecktokenService {

  constructor(

  ) { }


  chekToken(decode: DecodeService, navigate: NavigateService, router:Router, refresh: RefreshtokenService) {
    let token = localStorage.getItem('bearer');
    if (token) {
      if (decode.parseJwt(token).exp * 1000 - Date.now() < 0) {
        localStorage.removeItem('bearer');
        localStorage.removeItem('refreshToken');
        router.navigate(['auth/se-connecter']).then(r => console.log('token expired'));
      }
      else if (decode.parseJwt(token).exp * 1000 - Date.now() < 60000) {
        let refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
          refresh.refreshToken({refreshToken: refreshToken}).subscribe(
            (res) => {
              localStorage.setItem('bearer', res.bearer);
              localStorage.setItem('refreshToken', res.refreshToken);
              navigate.navigate(decode.parseJwt(res.bearer).role);
            },
            (error) => {
              console.log(error);
            }
          );
        } else {
          router.navigate(['auth/se-connecter']).then(r => console.log('refreshToken not exist'));
        }

      }
      else {
        navigate.navigate(decode.parseJwt(token).role);
      }

    }
    else {
      router.navigate(['auth/se-connecter']).then(r => console.log('token not exist'));

    }
  }
}
