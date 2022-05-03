import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "../base/use-case";
import { AiRepository } from "../repositories/ai.repository";
@Injectable({
  providedIn: 'root'
})
export class DetectImageYolov4TinyUseCase implements UseCase< {form: FormData}, {message: string, data : {ingredients: Array<string>, imageUrl: string} }>{

  constructor(
    private aiRepository: AiRepository,
  ){}

  execute(params: {form: FormData }): Observable<{message: string, data : {ingredients: Array<string>, imageUrl: string} }> {
    return this.aiRepository.detectImageYolov4Tiny(params);
  }

}
