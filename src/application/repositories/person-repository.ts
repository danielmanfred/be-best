import { Person } from "../../domain/entities/person";
import { IPerson } from "../../domain/models/person";

export interface PersonRepository {
  findById(id: string): Promise<Person | null>;
  create(person: IPerson): Promise<Person>;
}
