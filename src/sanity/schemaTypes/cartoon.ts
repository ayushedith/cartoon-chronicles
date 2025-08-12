export interface Cartoon {
  _id: string;
  title: string;
  synopsis: string;
  creators: string;
  releaseYear: number;
  country: string;
  genres: string[];
  imageUrl: string;
  facts?: string[];
}
