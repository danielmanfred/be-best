import { IPerson } from "../../../domain/models/person";
import { PersonRequest } from "../../controllers/get-person/protocols";

export interface IGetPerson {
  execute(person: PersonRequest): Promise<IPerson>;
}
