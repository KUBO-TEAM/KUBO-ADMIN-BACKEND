import { Observable } from "rxjs";
import { AiModel } from "../domain/ai.model";

export abstract class AiRepository{

  abstract detectImageYolov4(params: { form: FormData }) : Observable<{message: string, data: { ingredients : Array<string>, imageUrl: string,},}>;

  abstract detectImageYolov4Tiny(params: { form: FormData }) : Observable<{message: string, data: { ingredients : Array<string>, imageUrl: string,},}>;

  abstract updateYolov4Model(params: { file: File }) : Observable<{message: string}>;

  abstract updateYolov4TinyModel(params: { file: File }) : Observable<{message: string}>;

  abstract getYolov4LatestAiModel() : Observable<{message: string, data: AiModel }>;

  abstract getYolov4TinyLatestAiModel() : Observable<{message: string, data: AiModel }>;

}
