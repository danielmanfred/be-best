import { IPerson } from "../../../domain/models/person";
import { IGetPerson } from "./protocols";
import { PersonRepository } from "../../repositories/person-repository/protocols";

export class GetPerson implements IGetPerson {
  constructor(private readonly personRepository: PersonRepository) {}

  async execute(person: IPerson): Promise<IPerson> {
    return await this.personRepository.find(person);
  }
}
