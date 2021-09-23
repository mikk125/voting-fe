import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Animal voting app';

  constructor(public router: Router) {
  }

  goToUrl(url: string) {
    this.router.navigate([url]);
  }
}
