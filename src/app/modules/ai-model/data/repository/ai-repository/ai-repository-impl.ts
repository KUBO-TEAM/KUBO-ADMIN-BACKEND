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


  detectImageYolov4(params: { form: FormData; }): Observable<{ message: string, data : {ingredients: Array<string>, imageUrl: string} }> {
    return this.http.post<{message : string, data : { ingredients: Array<string>, imageUrl: string} }>(environment.url + 'api/yolov4/detect', params.form,
        {
          headers : { Authorization : `Bearer ${this.authService.userToken()}`},
        }
    );
  }

  detectImageYolov4Tiny(params: { form: FormData; }): Observable<{ message: string, data : {ingredients: Array<string>, imageUrl: string} }> {
    return this.http.post<{message : string, data : { ingredients: Array<string>, imageUrl: string} }>(environment.url + 'api/yolov4-tiny/detect', params.form,
        {
          headers : { Authorization : `Bearer ${this.authService.userToken()}`},
        }
    );
  }

  updateYolov4Model(params: { file: File }): Observable<{ message: string; }> {

    const formData = new FormData();
    formData.append('weight', params.file);

    return this.http.post<{message : string}>(environment.url + 'api/yolov4/update-model', formData,
        {
          headers : {
            Authorization : `Bearer ${this.authService.userToken()}`,
          }
        }
    );

  }

  updateYolov4TinyModel(params: { file: File; }): Observable<{ message: string; }> {
    const formData = new FormData();
    formData.append('weight', params.file);

    return this.http.post<{message : string}>(environment.url + 'api/yolov4-tiny/update-model', formData,
        {
          headers : {
            Authorization : `Bearer ${this.authService.userToken()}`,
          }
        }
    );
  }


  getYolov4LatestAiModel(): Observable<{ message: string; data: AiModel; }> {

    return this.http.get<{message : string, data: AiModel}>(environment.url + 'api/yolov4/latest-model',
        {
          headers : { Authorization : `Bearer ${this.authService.userToken()}`},
        }
    );
  }

  getYolov4TinyLatestAiModel(): Observable<{ message: string; data: AiModel; }> {
    return this.http.get<{message : string, data: AiModel}>(environment.url + 'api/yolov4-tiny/latest-model',
        {
          headers : { Authorization : `Bearer ${this.authService.userToken()}`},
        }
    );

  }


}
