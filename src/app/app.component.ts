import { Component, OnInit } from "@angular/core";
import { WishList } from "./models/movie.model";
import { WishlistService } from "./services/wishlist.service";

@Component({
  selector: "app-root",
  template: `
    <div class="justify-items-center">
      <app-header [wishList]="wishList"></app-header>
    </div>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  wishList: WishList = { movies: [] };

  constructor(private wishListService: WishlistService) {}
  ngOnInit(): void {
    this.wishListService.wishList.subscribe((_wishList) => {
      this.wishList = _wishList;
    });
  }
}
