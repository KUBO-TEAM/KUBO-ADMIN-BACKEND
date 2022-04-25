import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { response } from "express";
import {  map, mergeMap, Observable } from "rxjs";
import { ApiAuthenticationService } from "src/app/modules/api-authentication/presentation/api-authentication.service";
import { environment } from "src/environments/environment";
import { AiModel } from "../../../core/domain/ai.model";
import { AiRepository } from "../../../core/repositories/ai.repository";

@Injectable({
  providedIn: 'root'
})
export class AiRepositoryImpl extends AiRepository {
  constructor(
    private http: HttpClient,
    private authService: ApiAuthenticationService,
  ){
    super();
  }


  detectImage(params: { form: FormData; }): Observable<{ message: string, imageUrl: string }> {
    return this.http.post<{message : string, imageUrl: string}>(environment.url + 'api/ai/detect/', params.form,
        {
          headers : { Authorization : `Bearer ${this.authService.userToken()}`},
        }
    );
  }

  updateModel(params: { file: File }): Observable<{ message: string; }> {

    const formData = new FormData();
    formData.append('weight', params.file);

    return this.http.post<{message : string}>(environment.url + 'api/ai/update-model/', formData,
        {
          headers : {
            Authorization : `Bearer ${this.authService.userToken()}`,
          }
        }
    );
  }


  getLatestAiModel(): Observable<{ message: string; data: AiModel; }> {

    return this.http.get<{message : string, data: AiModel}>(environment.url + 'api/ai/latest-model/',
        {
          headers : { Authorization : `Bearer ${this.authService.userToken()}`},
        }
    );
  }


}
