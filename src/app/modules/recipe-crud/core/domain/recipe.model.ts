export interface RecipeModel {
  _id ?: string;
  name: string;
  description: string;
  reference: string;
  ingredients: string[];
  displayPhoto ?: string;
}
