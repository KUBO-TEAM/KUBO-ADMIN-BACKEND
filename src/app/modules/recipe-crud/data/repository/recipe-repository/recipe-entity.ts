export interface RecipeEntity{
  _id?: string,
  name: string,
  description: string,
  reference: string,
  categories: Array<string>,
  displayPhoto?: string;
}
