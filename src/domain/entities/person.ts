import { Entity } from "../../core/domain/entity";
import { IPerson } from "../models/person";

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
