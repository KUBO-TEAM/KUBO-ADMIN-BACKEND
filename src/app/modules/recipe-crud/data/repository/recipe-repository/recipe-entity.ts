export interface RecipeEntity{
  _id: string,
  name: string,
  description: string,
  reference: string,
  ingredients: string[],
  displayPhoto: string;
}
