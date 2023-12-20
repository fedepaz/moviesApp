import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Movie } from "../models/mov.model";
import { HttpClient } from "@angular/common/http";

const apiUrl = "/assets/mock-data/movies.json";
const apiUrlCategories = "/assets/mock-data/categories.json";

@Injectable({
  providedIn: "root",
})
export class MoviesDBService {
  constructor(private http: HttpClient) {}

  getAllMovies(
    limit = "12",
    sort = "desc",
    category?: string
  ): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(apiUrl).pipe(
      map((movies) => {
        if (category) {
          movies = movies.filter((movie) => movie.genre.includes(category));
        }

        movies.sort((a, b) => {
          if (sort === "asc") {
            return a.rating - b.rating;
          } else {
            return b.rating - a.rating;
          }
        });

        return movies.slice(0, +limit);
      })
    );
  }

  getAllCategories(): Observable<Array<string>> {
    return this.http.get<Array<string>>(`${apiUrlCategories}`);
  }
  getMovie(movieId: number): Observable<Movie | undefined> {
    return this.getAllMovies().pipe(
      map((_movies) => _movies.find((_movie) => _movie.id === movieId))
    );
  }
}
