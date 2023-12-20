import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Movie } from "../../../../models/mov.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-movies-box",
  templateUrl: "./movies-box.component.html",
})
export class MoviesBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  @Input() movie: Movie | undefined;
  @Output() addToCart = new EventEmitter();

  constructor(private router: Router) {}
  ngOnInit(): void {}
  onAddToWishList(): void {
    this.addToCart.emit(this.movie);
  }
  goToMovieDetailPage(): void {
    if (this.movie?.id) {
      this.router.navigate(["/movies", this.movie.id]);
    }
  }
}
