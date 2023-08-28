import { PersonRepository } from "../../src/application/repositories/person-repository/mongo-person-repository";
import { Person } from "../../src/domain/entities/person";
import { IPerson } from "../../src/domain/models/person";

export class InMemoryPersonRepository implements PersonRepository {
  public people: Person[] = [];

  async findById(id: string): Promise<Person | null> {
    const person = this.people.find((p) => p.id === id);
    return person ?? null;
  }

  async create(person: IPerson): Promise<Person> {
    const newPerson = Person.setPerson(person);
    this.people.push(newPerson);
    return newPerson;
  }
}
