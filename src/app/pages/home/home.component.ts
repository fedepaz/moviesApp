import { Component, OnInit } from "@angular/core";
import { WishlistService } from "../../services/wishlist.service";
import { Movie } from "../../models/mov.model";

const ROWS_HEIGHT: { [id: number]: number } = {
  1: 400,
  3: 335,
  4: 350,
};

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;
  constructor(private wishListService: WishlistService) {}
  ngOnInit(): void {}

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }
  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
  onAddToCart(movie: Movie): void {
    this.wishListService.addToWishList({
      movie: movie.image,
      name: movie.title,
      id: movie.id,
    });
  }
}
