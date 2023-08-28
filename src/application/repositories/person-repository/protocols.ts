import { IPerson } from "../../../domain/models/person";
import { PersonRequest } from "../../controllers/get-person/protocols";

export interface PersonRepository {
  find(person: PersonRequest): Promise<IPerson | null>;
  create(person: IPerson): Promise<IPerson>;
}
