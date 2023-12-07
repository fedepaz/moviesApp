import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div class="justify-items-center">
      <app-header></app-header>
    </div>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = "moviesApp";
}
