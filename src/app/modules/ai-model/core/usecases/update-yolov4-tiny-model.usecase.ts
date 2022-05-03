import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "../base/use-case";
import { AiRepository } from "../repositories/ai.repository";
@Injectable({
  providedIn: 'root'
})
export class UpdateYolov4TinyModelUseCase implements UseCase< {file: File,}, {message: string}>{

  constructor(
    private aiRepository: AiRepository,
  ){}

  execute(params: {file: File, }): Observable<{message: string}> {
    return this.aiRepository.updateYolov4TinyModel(params);
  }

}
