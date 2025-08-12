import { Cartoon } from './cartoon';

export interface FunFact {
  _id: string;
  fact: string;
  cartoon?: Cartoon;
  category: string;
}
