import { IPerson } from "../../../domain/models/person";
import { CreateUserParams } from "../../controllers/set-person/protocols";
import { PersonRepository } from "../../repositories/person-repository/protocols";
import { ISetPerson } from "./protocols";

export class SetPerson implements ISetPerson {
  constructor(private personRepository: PersonRepository) {}

  async execute(person: CreateUserParams): Promise<IPerson> {
    return this.personRepository.create({ ...person, createdAt: new Date() });
  }
}
