import { IPerson } from "../../../domain/models/person";
import { IGetPerson, IGetPersonRepository } from "./protocols";

export class GetPerson implements IGetPerson {
  constructor(private readonly getPersonRepository: IGetPersonRepository) {}

  async execute(person: IPerson): Promise<IPerson> {
    return await this.getPersonRepository.getPerson(person);
  }
}
