import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "../base/use-case";
import { AiRepository } from "../repositories/ai.repository";
@Injectable({
  providedIn: 'root'
})
export class DetectImageUseCase implements UseCase< {form: FormData, string: string}, {message: string, imageUrl: string}>{

  constructor(
    private aiRepository: AiRepository,
  ){}

  execute(params: {form: FormData }): Observable<{message: string, imageUrl: string}> {
    return this.aiRepository.detectImage(params);
  }

}
