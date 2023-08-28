import { IPerson } from "../../../domain/models/person";
import { ISetPerson } from "../../usercases/set-person/protocols";
import { HttpResponse, HttpRequest } from "../protocols";
import { CreateUserParams, ISetPersonController } from "./protocols";

export class SetPersonController implements ISetPersonController {
  constructor(private readonly setPerson: ISetPerson) {}

  async handle(
    httpRequest: HttpRequest<CreateUserParams>
  ): Promise<HttpResponse<IPerson>> {
    try {
      const person = await this.setPerson.execute(httpRequest.body);

      if (!httpRequest.body) {
        return {
          statusCode: 400,
          body: "Please specify a body",
        };
      }

      return {
        statusCode: 201,
        body: person,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
        error: error.message,
      };
    }
  }
}
