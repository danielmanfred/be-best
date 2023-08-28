import { IPerson } from "../../../domain/models/person";

export interface IGetPerson {
  execute(person: IPerson): Promise<IPerson>;
}

export interface IGetPersonRepository {
  getPerson(person: IPerson): Promise<IPerson>;
}
