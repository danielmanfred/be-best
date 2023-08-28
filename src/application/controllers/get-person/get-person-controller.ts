import { IPerson } from "../../../domain/models/person";
import { IGetPerson } from "../../usercases/get-person/protocols";
import { HttpResponse } from "../protocols";
import { IGetPersonController, PersonRequest } from "./protocols";

export class GetPersonController implements IGetPersonController {
  constructor(private readonly getPerson: IGetPerson) {}

  async handle(person: PersonRequest): Promise<HttpResponse<IPerson>> {
    try {
      const personFound = await this.getPerson.execute(person);
      if (!personFound) {
        return {
          statusCode: 404,
          body: "Person not found",
        };
      }

      return {
        statusCode: 200,
        body: personFound,
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
