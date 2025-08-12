import { Cartoon } from './cartoon';

export interface Article {
  _id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  relatedCartoons: Cartoon[];
}
