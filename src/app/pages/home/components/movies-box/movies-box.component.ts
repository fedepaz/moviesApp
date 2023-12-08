import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Movie } from "../../../../models/mov.model";

@Component({
  selector: "app-movies-box",
  templateUrl: "./movies-box.component.html",
})
export class MoviesBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  movie: Movie | undefined = {
    image: "https://via.placeholder.com/150",
    title: "Tenet",
    description:
      "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
    rating: 7.8,
    duration: "2h 30min",
    genre: ["Action", "Sci-Fi"],
    releasedDate: "3 September 2020",
    trailerLink: "https://www.youtube.com/watch?v=LdOM0x0XDMo",
    id: 1,
  };
  @Output() addToCart = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}
  onAddToWishList(): void {
    this.addToCart.emit(this.movie);
  }
}
