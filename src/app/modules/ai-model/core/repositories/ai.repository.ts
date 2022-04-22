import { Observable } from "rxjs";

export abstract class AiRepository{

  abstract detectImage(params: { form: FormData }) : Observable<{message: string, imageUrl: string}>;

}
