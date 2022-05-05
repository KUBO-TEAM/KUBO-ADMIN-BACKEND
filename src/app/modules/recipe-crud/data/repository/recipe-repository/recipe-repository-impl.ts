import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { response } from "express";
import {  map, mergeMap, Observable } from "rxjs";
import { ApiAuthenticationService } from "src/app/modules/api-authentication/presentation/api-authentication.service";
import { environment } from "src/environments/environment";
import { RecipeModel } from "../../../core/domain/recipe.model";
import { RecipeRepository } from "../../../core/repositories/recipe.repository";
import { RecipeEntity } from "./recipe-entity";
import { RecipeRepositoryMapper } from "./recipe-repository-mapper";

@Injectable({
  providedIn: 'root'
})
export class RecipeRepositoryImpl extends RecipeRepository {
  mapper = new RecipeRepositoryMapper();

  constructor(
    private http: HttpClient,
    private authService: ApiAuthenticationService,
  ){
    super();
  }

  getAllRecipes(): Observable<{message: string, data: RecipeEntity[]}> {
    return this.http.get<{message: string, data: RecipeEntity[]}>(environment.url + 'api/recipes/',
      {
        headers : { Authorization : `Bearer ${this.authService.userToken()}`},
      }
    );
  }

  getRecipe(_id: string): Observable<RecipeModel> {
    return this.http.get<{message: string, data: RecipeEntity}>(environment.url + `api/recipes/${_id}`,
      {
        headers : { Authorization : `Bearer ${this.authService.userToken()}`},
      }
    )
      .pipe(map((item)=>item.data))
      .pipe(map(this.mapper.mapFrom));
  }

  addRecipe(recipeFormData: FormData): Observable<{ message: string; }> {
    return this.http.post<{message : string}>(environment.url + 'api/recipes/', recipeFormData,
      {
        headers : { Authorization : `Bearer ${this.authService.userToken()}`},
      }
    );
  }

  deleteRecipe(_id: string): Observable<{ message: string; }> {
    return this.http.delete<{message: string }>(environment.url + 'api/recipes/' + _id,
      {
        headers : { Authorization : `Bearer ${this.authService.userToken()}`},
      }
    );
  }

  updateRecipe(param: {form: FormData, _id: string}): Observable<{message: string;}>{
    return this.http.put<{message: string}>( environment.url + 'api/recipes/' + param._id , param.form, {
      headers: {
        Authorization : `Bearer ${this.authService.userToken()}`,
      }
    });
  }


}
