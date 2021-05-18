import { SubCategorie } from './sub-categorie';
export interface Product {
  id?: number;
  name: String;
  image: String;
  price: number;
  quantity: number;
  subCategory: SubCategorie;
  description: String;
}
