import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { MovieItem, WishList } from "../models/movie.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { time } from "console";

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
}
