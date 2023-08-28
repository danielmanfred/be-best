import { IPerson } from "../../../domain/models/person";
import { IGetPerson } from "../../usercases/get-person/protocols";
import { HttpResponse, HttpRequest } from "../protocols";
import { IGetPersonController, PersonRequest } from "./protocols";

export class GetPersonController implements IGetPersonController {
  constructor(private readonly getPerson: IGetPerson) {}

  async handle(
    httpRequest: HttpRequest<PersonRequest>
  ): Promise<HttpResponse<IPerson>> {
    try {
      const person = await this.getPerson.execute(httpRequest.body);
      if (!person) {
        return {
          statusCode: 404,
          body: "Person not found",
        };
      }

      return {
        statusCode: 200,
        body: person,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
        error,
      };
    }
  }
}
