import { IPerson } from "../../../domain/models/person";
import { HttpResponse } from "../protocols";

export interface IGetPersonController {
  handle(person: IPerson): Promise<HttpResponse<IPerson>>;
}
