import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "../base/use-case";
import { AiModel } from "../domain/ai.model";
import { AiRepository } from "../repositories/ai.repository";
@Injectable({
  providedIn: 'root'
})
export class GetLatestAiModelUseCase implements UseCase< void, {message: string, data: AiModel}>{

  constructor(
    private aiRepository: AiRepository,
  ){}

  execute(params: void): Observable<{message: string, data: AiModel}> {
    return this.aiRepository.getLatestAiModel();
  }

}
