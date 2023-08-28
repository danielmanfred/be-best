import { IPerson } from "../../../domain/models/person";
import { PersonRepository } from "./protocols";

export class MongoPersonRepository implements PersonRepository {
  async find(person: Partial<IPerson>): Promise<IPerson> {
    return {
      firstName: "Daniel",
      lastName: "Brito",
      phone: {
        code: "84",
        number: "99999-9999",
        cellphone: true,
      },
    };
  }
  async create(person: IPerson): Promise<IPerson> {
    return {
      firstName: "Daniel",
      lastName: "Brito",
      phone: {
        code: "84",
        number: "99999-9999",
        cellphone: true,
      },
    };
  }
}
