export interface RecipeModel {
  _id ?: string;

  name: string;
  description: string;

  course: string;
  cuisine: string;
  prep_time: string;
  cook_time: string;
  servings: string;

  reference: string;
  youtubeId?: string;
  displayPhoto ?: string;

  categories: Array<string>;
  ingredients: Array<{quantity: Number, ingredient: String }>;

  instructions: Array<String>;
}
