import { Component, OnInit } from "@angular/core";
import { MovieItem, WishList } from "../../models/movie.model";

const tenet: MovieItem = {
  movie: "https://via.placeholder.com/150",
  name: "Tenet",
  id: 1,
};

const spiderVerse: MovieItem = {
  movie: "https://via.placeholder.com/150",
  name: "Spider-Man: Into the Spider-Verse",
  id: 2,
};

const knivesOut: MovieItem = {
  movie: "https://via.placeholder.com/150",
  name: "Knives Out",
  id: 3,
};

const guardiansOfTheGalaxy: MovieItem = {
  movie: "https://via.placeholder.com/150",
  name: "Guardians of the Galaxy",
  id: 4,
};

const ageOfUltron: MovieItem = {
  movie: "https://via.placeholder.com/150",
  name: "Avengers: Age of Ultron",
  id: 5,
};

@Component({
  selector: "app-wish-list",
  templateUrl: "./wish-list.component.html",
})
export class WishListComponent implements OnInit {
  wishList: WishList = {
    movies: [tenet, spiderVerse, knivesOut, guardiansOfTheGalaxy, ageOfUltron],
  };
  dataSource: Array<MovieItem> = [];
  displayedColumns: Array<string> = ["movie", "name", "action"];

  constructor() {}
  ngOnInit(): void {
    this.dataSource = this.wishList.movies;
  }
}
