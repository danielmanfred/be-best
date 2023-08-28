import { Person } from "../../../domain/entities/person";
import { IPerson } from "../../../domain/models/person";
import { PersonRepository } from "../../repositories/person-repository";

export class SetPerson {
  constructor(private personRepository: PersonRepository) {}

  async execute(person: IPerson): Promise<Person> {
    return this.personRepository.create(person);
  }
}
