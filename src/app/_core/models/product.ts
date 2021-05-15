import { SubCategorie } from './sub-categorie';
export interface Product {
  id?: number;
  name: String;
  image: String;
  subCategorie: SubCategorie;
}
