import { Mapper } from "../../../core/base/mapper";
import { RecipeModel } from "../../../core/domain/recipe.model";
import { RecipeMockEntity } from "./recipe-mock-entity";

export class RecipeMockRepositoryMapper extends Mapper <RecipeMockEntity, RecipeModel>{

  mapFrom(param: RecipeMockEntity): RecipeModel {
    return{
      _id: param._id,
      name: param.name,
      description: param.description,
      reference: param.reference,
      ingredients: param.ingredients,
      displayPhoto: param.displayPhoto,
    }
  }
  mapTo(param: RecipeModel): RecipeMockEntity {
    return{
      _id: param._id,
      name: param.name,
      description: param.description,
      reference: param.reference,
      ingredients: param.ingredients,
      displayPhoto: param.displayPhoto,
    }
  }

}
