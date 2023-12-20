import { Component, Input } from "@angular/core";
import { MovieItem, WishList } from "../../models/movie.model";
import { WishlistService } from "../../services/wishlist.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  private _wishList: WishList = { movies: [] };
  movieQuantity = 0;

  @Input()
  get wishList(): WishList {
    return this._wishList;
  }

  set wishList(wishList: WishList) {
    this._wishList = wishList;
    this.movieQuantity = this._wishList.movies
      .map((m) => m.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  constructor(private wishListService: WishlistService) {}

  onClearWishList(): void {
    this.wishListService.clearCart();
  }
}
