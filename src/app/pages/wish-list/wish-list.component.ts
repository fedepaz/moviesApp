import { Component, OnInit } from "@angular/core";
import { MovieItem, WishList } from "../../models/movie.model";
import { WishlistService } from "../../services/wishlist.service";

@Component({
  selector: "app-wish-list",
  templateUrl: "./wish-list.component.html",
})
export class WishListComponent implements OnInit {
  wishList: WishList = {
    movies: [],
  };
  dataSource: Array<MovieItem> = [];
  displayedColumns: Array<string> = ["movie", "name", "action"];

  constructor(private wishListService: WishlistService) {}
  ngOnInit(): void {
    this.dataSource = this.wishList.movies;
    this.wishListService.wishList.subscribe((_wishList: WishList) => {
      this.wishList = _wishList;
      this.dataSource = this.wishList.movies;
    });
  }
  onClearWihsList(): void {
    this.wishListService.clearCart();
  }
  onRemoveFromWishList(movie: MovieItem): void {
    this.wishListService.removeFromWishList(movie);
  }
}
