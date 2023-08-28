import { IPerson } from "../../../domain/models/person";
import { IPhone } from "../../../domain/models/phone";

export interface CreateUserParams {
  firstName: string;
  lastName: string;
  phone: IPhone[];
}

export interface ISetPersonController {
  setPerson(): Promise<IPerson>;
}
