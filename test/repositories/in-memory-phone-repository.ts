import { PhoneRepository } from "../../src/application/repositories/phone-repository/phone-repository";
import { Phone } from "../../src/domain/entities/phone";
import { IPhone } from "../../src/domain/models/phone";

export class InMemoryPhoneRepository implements PhoneRepository {
  public phones: Phone[] = [];

  async findById(id: string): Promise<Phone | null> {
    const phone = this.phones.find((p) => p.id === id);
    return phone ?? null;
  }

  async create(phone: IPhone): Promise<Phone> {
    return Phone.setPhone(phone);
  }
}
