import { Item } from "./item.model";

export interface Creators {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}
