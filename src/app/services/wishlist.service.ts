import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { MovieItem, WishList } from "../models/movie.model";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class WishlistService {
  wishList = new BehaviorSubject<WishList>({ movies: [] });

  constructor(private _snackBar: MatSnackBar) {}

  addToWishList(movItem: MovieItem): void {
    const movies = [...this.wishList.value.movies];
    const itemInWishList = movies.find((_movie) => _movie.id === movItem.id);
    if (!itemInWishList) {
      movies.push(movItem);
    }
    this.wishList.next({ movies });
    this._snackBar.open("Movie added to Wish List", "OK", { duration: 3000 });
    console.log(this.wishList.value);
  }

  clearCart(): void {
    this.wishList.next({ movies: [] });
    this._snackBar.open("Wish List is empty", "OK", { duration: 3000 });
  }
  removeFromWishList(movie: MovieItem): void {
    const filterederMovies = this.wishList.value.movies.filter(
      (_movie) => _movie.id !== movie.id
    );
    this.wishList.next({ movies: filterederMovies });
    this._snackBar.open("Movie removed from Wish List", "OK", {
      duration: 3000,
    });
  }
}
