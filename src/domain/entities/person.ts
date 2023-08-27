import { Entity } from "../../core/domain/entity";
import { Phone } from "../entities/phone";

interface IPerson {
  firstName: string;
  lastName: string;
  phone: Phone;
}

export class Person extends Entity<IPerson> {
  private person: IPerson;

  private constructor(person: IPerson, id?: string) {
    super(person, id);
  }

  static setPerson(person: IPerson, id?: string) {
    return new Person(person, id);
  }

  public getPerson(): IPerson {
    return this.person;
  }
}
