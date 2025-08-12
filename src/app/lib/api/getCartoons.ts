import client from '@/sanity'; // adjust path accordingly
import { Cartoon } from '@/sanity/schemaTypes/cartoon';

const query = `*[_type == "cartoon"]{
  _id,
  title,
  synopsis,
  "imageUrl": image.asset->url
}`;
const cartoons = await client.fetch<Cartoon[]>(query);

export const getCartoons = async (): Promise<Cartoon[]> => {
  return cartoons;
}