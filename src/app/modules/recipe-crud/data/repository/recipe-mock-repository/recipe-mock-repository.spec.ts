import { inject, TestBed } from "@angular/core/testing";
import { RecipeRepository } from "../../../core/repositories/recipe.repository";
import { RecipeMockRepositoryImpl } from "./recipe-mock-repository";

describe('RecipeRepositoryMockService', ()=> {
  beforeEach(()=>{
    TestBed.configureTestingModule({
      providers: [RecipeMockRepositoryImpl]
    });
  });

  it('should be created', inject([RecipeRepository], (service: RecipeRepository) => {
    expect(service).toBeTruthy();
  }));

});
