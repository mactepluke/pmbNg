import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pmbNg';
  activePageName ='';

  setActivePageName() {
    let path = this.route.url.split('/')[2];

    if (path === undefined) {
      this.activePageName = '';
    } else {
      this.activePageName = decodeURIComponent(path);
    }
  }

  constructor(private route: Router) {}

}
