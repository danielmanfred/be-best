import { IPerson } from "../../../domain/models/person";
import { CreateUserParams } from "../../controllers/set-person/protocols";

export interface ISetPerson {
  execute(person: CreateUserParams): Promise<IPerson>;
}
