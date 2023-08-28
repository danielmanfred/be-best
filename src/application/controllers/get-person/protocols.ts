import { IPerson } from "../../../domain/models/person";
import { HttpResponse } from "../protocols";

export interface PersonRequest {
  firstName: string;
  lastName: string;
}

export interface IGetPersonController {
  handle(person: IPerson): Promise<HttpResponse<IPerson>>;
}
