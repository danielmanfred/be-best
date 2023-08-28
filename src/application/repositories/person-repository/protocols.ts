import { IPerson } from "../../../domain/models/person";
import { IPhone } from "../../../domain/models/phone";
import { PersonRequest } from "../../controllers/get-person/protocols";

export interface CreateParams {
  firstName: string;
  lastName: string;
  phone: IPhone[];
  createdAt: Date;
}

export interface PersonRepository {
  findByName(query: PersonRequest): Promise<IPerson | null>;
  create(person: CreateParams): Promise<IPerson>;
}
