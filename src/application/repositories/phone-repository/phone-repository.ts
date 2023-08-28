import { Phone } from "../../../domain/entities/phone";
import { IPhone } from "../../../domain/models/phone";

export interface PhoneRepository {
  findById(id: string): Promise<Phone | null>;
  create(person: IPhone): Promise<Phone>;
}
