import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { MovieItem, WishList } from "../models/movie.model";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class WishlistService {
  private localStorageKey = "wishlist";

  wishList = new BehaviorSubject<WishList>(this.loadWishlistFromLocalStorage());

  constructor(private _snackBar: MatSnackBar) {}
  private loadWishlistFromLocalStorage(): WishList {
    if (typeof localStorage !== "undefined") {
      const storedWishlist = localStorage.getItem(this.localStorageKey);
      return storedWishlist ? JSON.parse(storedWishlist) : { movies: [] };
    } else {
      return { movies: [] }; // Fallback in case localStorage is not available
    }
  }

  private saveWishlistToLocalStorage(wishlist: WishList): void {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(this.localStorageKey, JSON.stringify(wishlist));
    }
  }

  addToWishList(movItem: MovieItem): void {
    const movies = [...this.wishList.value.movies];
    const itemInWishList = movies.find((_movie) => _movie.id === movItem.id);

    if (!itemInWishList) {
      movies.push(movItem);
      this.saveWishlistToLocalStorage({ movies });
      this._snackBar.open("Movie added to Wish List", "OK", { duration: 3000 });
      this.wishList.next({ movies });
      console.log(this.wishList.value);
    }
  }

  clearCart(): void {
    this.wishList.next({ movies: [] });
    this.saveWishlistToLocalStorage({ movies: [] });
    this._snackBar.open("Wish List is empty", "OK", { duration: 3000 });
  }

  removeFromWishList(movie: MovieItem): void {
    const filteredMovies = this.wishList.value.movies.filter(
      (_movie) => _movie.id !== movie.id
    );

    this.wishList.next({ movies: filteredMovies });
    this.saveWishlistToLocalStorage({ movies: filteredMovies });
    this._snackBar.open("Movie removed from Wish List", "OK", {
      duration: 3000,
    });
  }
}
