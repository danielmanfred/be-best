import { IPerson } from "../../../domain/models/person";
import { IGetPerson } from "./protocols";
import { PersonRepository } from "../../repositories/person-repository/protocols";
import { PersonRequest } from "../../controllers/get-person/protocols";

export class GetPerson implements IGetPerson {
  constructor(private readonly personRepository: PersonRepository) {}

  async execute(person: PersonRequest): Promise<IPerson> {
    return await this.personRepository.findByName(person);
  }
}
