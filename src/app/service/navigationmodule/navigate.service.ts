import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  constructor(
    private router: Router
  ) { }

  navigate(role: string) {
    if (role === 'ADMINISTRATEUR') {
      this.router.navigate(['/admin']);
    }
    else if (role === 'MANAGER') {
      this.router.navigate(['/manager']);
    }
    else {
      //this.router.navigate(['/user']);
    }

  }
}
