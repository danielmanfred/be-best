import { IPerson } from "../../../domain/models/person";
import { HttpResponse, HttpRequest } from "../protocols";

export interface PersonRequest {
  firstName: string;
  lastName: string;
}

export interface IGetPersonController {
  handle(
    httpRequest: HttpRequest<PersonRequest>
  ): Promise<HttpResponse<IPerson>>;
}
