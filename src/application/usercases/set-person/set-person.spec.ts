import { InMemoryPersonRepository } from "../../../../test/repositories/in-memory-person-repository";
import { InMemoryPhoneRepository } from "../../../../test/repositories/in-memory-phone-repository";
import { Person } from "../../../domain/entities/person";
import { SetPhone } from "../set-phone/set-phone";
import { SetPerson } from "./set-person";

describe("SetPerson", () => {
  it("should create a person successfully", async () => {
    const personRepository = new InMemoryPersonRepository();
    const phoneRepository = new InMemoryPhoneRepository();

    const sutPhone = new SetPhone(phoneRepository);

    const phone = await sutPhone.execute({
      code: "84",
      number: "99999-9999",
      cellphone: true,
    });

    const sutPerson = new SetPerson(personRepository);

    const response = await sutPerson.execute({
      firstName: "Cristiano",
      lastName: "Ronaldo",
      phone,
    });

    console.log("Show Person: ", response.getPerson());

    expect(response instanceof Person).toBeTruthy();
  });
});
