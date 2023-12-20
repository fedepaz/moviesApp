import { Component, OnDestroy, OnInit } from "@angular/core";
import { WishlistService } from "../../services/wishlist.service";
import { Movie } from "../../models/mov.model";
import { Subscription } from "rxjs";
import { MoviesDBService } from "../../services/movies-db.service";

const ROWS_HEIGHT: { [id: number]: number } = {
  1: 400,
  3: 335,
  4: 350,
};

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit, OnDestroy {
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;
  movies: Array<Movie> | undefined;
  sort = "desc";
  count = "12";
  moviesSubscription: Subscription | undefined;

  constructor(
    private wishListService: WishlistService,
    private movieDBService: MoviesDBService
  ) {}
  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.moviesSubscription = this.movieDBService
      .getAllMovies(this.count, this.sort, this.category)
      .subscribe((_movies) => {
        this.movies = _movies;
      });
  }
  onSortChange(newSort: string) {
    this.sort = newSort;
    this.getMovies();
  }
  onItemsCountChange(newCount: number) {
    this.count = newCount.toString();
    this.getMovies();
  }
  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }
  onShowCategory(newCategory: string): void {
    this.category = newCategory;
    this.getMovies();
  }
  onAddToCart(movie: Movie): void {
    this.wishListService.addToWishList({
      movie: movie.image,
      name: movie.title,
      quantity: 1,
      category: movie.genre,
      id: movie.id,
    });
  }

  ngOnDestroy(): void {
    if (this.moviesSubscription) {
      this.moviesSubscription.unsubscribe();
    }
  }
}
