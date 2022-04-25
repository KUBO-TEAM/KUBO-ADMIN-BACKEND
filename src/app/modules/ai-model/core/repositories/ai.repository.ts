import { Observable } from "rxjs";
import { AiModel } from "../domain/ai.model";

export abstract class AiRepository{

  abstract detectImage(params: { form: FormData }) : Observable<{message: string, imageUrl: string}>;

  abstract updateModel(params: { file: File }) : Observable<{message: string}>;

  abstract getLatestAiModel() : Observable<{message: string, data: AiModel }>

}
