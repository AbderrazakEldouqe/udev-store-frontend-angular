import { Categorie } from './categorie';

export interface SubCategorie {
  id?: number;
  name: String;
  image: String;
  category: Categorie;
}
