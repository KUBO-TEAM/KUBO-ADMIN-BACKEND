import { Mapper } from "../../../core/base/mapper";
import { RecipeModel } from "../../../core/domain/recipe.model";
import { RecipeEntity } from "./recipe-entity";

export class RecipeRepositoryMapper extends Mapper<RecipeEntity, RecipeModel>{

  mapFrom(param: RecipeEntity): RecipeModel {
    return {
      _id: param._id,

      name: param.name,
      description: param.description,

      course: param.course,
      cuisine: param.cuisine,
      prep_time: param.prep_time,
      cook_time: param.cook_time,
      servings: param.servings,

      reference: param.reference,

      displayPhoto: param.displayPhoto,


      categories: param.categories,
      ingredients: param.ingredients,
      instructions: param.instructions,
    }
  }
  mapTo(param: RecipeModel): RecipeEntity {
    return {
      _id: param._id,

      name: param.name,
      description: param.description,

      course: param.course,
      cuisine: param.cuisine,
      prep_time: param.prep_time,
      cook_time: param.cook_time,
      servings: param.servings,

      reference: param.reference,

      displayPhoto: param.displayPhoto,


      categories: param.categories,
      ingredients: param.ingredients,
      instructions: param.instructions,
    }
  }

}
