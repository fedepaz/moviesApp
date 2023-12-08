export interface WishList {
  movies: Array<MovieItem>;
}

export interface MovieItem {
  movie: string;
  name: string;
  id: number;
}
