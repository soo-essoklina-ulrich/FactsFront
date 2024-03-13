import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  constructor() { }

  toggleSidebarSubject = new Subject<void>();

  toggleSidebar() {
    this.toggleSidebarSubject.next();
  }
}
