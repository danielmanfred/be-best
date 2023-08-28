import { Phone } from "../../../domain/entities/phone";
import { IPhone } from "../../../domain/models/phone";
import { PhoneRepository } from "../../repositories/phone-repository";

export class SetPhone {
  constructor(private phoneRepository: PhoneRepository) {}

  async execute(phone: IPhone): Promise<Phone> {
    return this.phoneRepository.create(phone);
  }
}
