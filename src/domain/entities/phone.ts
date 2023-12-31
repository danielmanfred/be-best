import { Entity } from "../../core/domain/entity";
import { IPhone } from "../models/phone";

export class Phone extends Entity<IPhone> {
  private phone: IPhone;

  private constructor(phone: IPhone, id?: string) {
    super(phone, id);
  }

  static setPhone(phone: IPhone, id?: string) {
    return new Phone(phone, id);
  }

  public getPhone(): IPhone {
    return this.phone;
  }

  public isCellphone(): boolean {
    return this.phone.cellphone;
  }
}
