import { Person } from "../../../domain/entities/person";
import { IPerson } from "../../../domain/models/person";

export interface ISetPerson {
  execute(person: IPerson): Promise<Person>;
}
