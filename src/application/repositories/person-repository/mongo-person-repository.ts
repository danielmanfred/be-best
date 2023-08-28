import { IPerson } from "../../../domain/models/person";
import { PersonRequest } from "../../controllers/get-person/protocols";
import { MongoClient } from "../../database/mongo";
import { PersonRepository, CreateParams } from "./protocols";

export class MongoPersonRepository implements PersonRepository {
  async findByName(query: PersonRequest): Promise<IPerson> {
    const person = await MongoClient.db
      .collection<IPerson>("persons")
      .findOne(query);

    if (!person) {
      throw new Error("Person not found");
    }

    return person;
  }
  async create(person: CreateParams): Promise<IPerson> {
    const { insertedId } = await MongoClient.db
      .collection("persons")
      .insertOne(person);

    const { _id, ...rest } = await MongoClient.db
      .collection<Omit<IPerson, "id">>("persons")
      .findOne({ _id: insertedId });

    return { id: _id.toHexString(), ...rest };
  }
}
