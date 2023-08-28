import { IPerson } from "../../../domain/models/person";
import { MongoClient } from "../../database/mongo";
import { PersonRepository } from "./protocols";

export class MongoPersonRepository implements PersonRepository {
  async find(query: Partial<IPerson>): Promise<IPerson> {
    const person = await MongoClient.db
      .collection<IPerson>("persons")
      .find(query)
      .toArray();

    return person[0];
  }
  async create(person: Omit<IPerson, "id">): Promise<IPerson> {
    return {
      id: "abcdefghijlkmnopqrstuvyxwz",
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
