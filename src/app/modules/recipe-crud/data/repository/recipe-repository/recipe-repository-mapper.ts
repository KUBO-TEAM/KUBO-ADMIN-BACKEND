import { Mapper } from "../../../core/base/mapper";
import { RecipeModel } from "../../../core/domain/recipe.model";
import { RecipeEntity } from "./recipe-entity";

export class RecipeRepositoryMapper extends Mapper<RecipeEntity, RecipeModel>{

  mapFrom(param: RecipeEntity): RecipeModel {

    return {
      _id: param._id,
      name: param.name,
      description: param.description,
      reference: param.reference,
      ingredients: param.ingredients,
    }
  }
  mapTo(param: RecipeModel): RecipeEntity {
    return {
      _id: param._id,
      name: param.name,
      description: param.description,
      reference: param.reference,
      ingredients: param.ingredients,
    }
  }

}
