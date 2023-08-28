import { IPerson } from "../../../domain/models/person";
import { IPhone } from "../../../domain/models/phone";
import { HttpResponse, HttpRequest } from "../protocols";

export interface CreateUserParams {
  firstName: string;
  lastName: string;
  phone: IPhone[];
}

export interface ISetPersonController {
  handle(
    httpRequest: HttpRequest<CreateUserParams>
  ): Promise<HttpResponse<IPerson>>;
}
