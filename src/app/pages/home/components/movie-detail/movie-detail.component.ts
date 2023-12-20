import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  PLATFORM_ID,
  Renderer2,
  inject,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MoviesDBService } from "../../../../services/movies-db.service";
import { Movie } from "../../../../models/mov.model";
import { DOCUMENT, isPlatformBrowser } from "@angular/common";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
})
export class MovieDetailComponent implements OnInit {
  movieId: number = 0;
  movie: Movie | undefined;
  @Input() movieEmit: Movie | undefined;
  @Output() addToCart = new EventEmitter();

  private apiLoaded = false;
  videoId: string | undefined;
  videoURL: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private movieDBService: MoviesDBService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.movieId = +params["id"];
      if (this.movieId) {
        this.loadMovieDetails();
      }
    });
    if (!this.apiLoaded && isPlatformBrowser(this.platformId)) {
      const tag = this.renderer.createElement("script");
      this.renderer.setAttribute(tag, "src", "http://youtube.com/iframe_api");
      this.renderer.appendChild(this.document.body, tag);
      this.apiLoaded = true;
    }
  }
  loadMovieDetails(): void {
    this.movieDBService.getMovie(this.movieId).subscribe((_movie) => {
      this.movie = _movie;
      this.videoId = this.movie?.trailerLink;
      this.videoURL = `http://localhost:4200/`;
    });
  }
  onAddToWishList(): void {
    this.movieEmit = this.movie;
    this.addToCart.emit(this.movieEmit);
  }
}
