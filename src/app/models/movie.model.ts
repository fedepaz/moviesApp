export interface WishList {
  movies: Array<MovieItem>;
}

export interface MovieItem {
  movie: string;
  name: string;
  quantity: number;
  category: string[];
  id: number;
}
