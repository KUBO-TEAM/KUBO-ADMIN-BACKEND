export interface RecipeModel {
  _id ?: string;
  name: string;
  description: string;
  reference: string;
  categories: Array<string>;
  displayPhoto ?: string;
}
