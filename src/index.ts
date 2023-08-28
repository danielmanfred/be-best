import express from "express";
import { config } from "dotenv";
import { GetPersonController } from "./application/controllers/get-person/get-person-controller";
import { GetPerson } from "./application/usercases/get-person/get-person";
import { MongoPersonRepository } from "./application/repositories/person-repository/mongo-person-repository";
import { MongoClient } from "./application/database/mongo";
import { SetPerson } from "./application/usercases/set-person/set-person";
import { SetPersonController } from "./application/controllers/set-person/set-person-controller";

const main = async () => {
  config();
  const app = express();
  await MongoClient.connect();

  app.get("/persons", async (req, res) => {
    const personRepository = new MongoPersonRepository();
    const getPerson = new GetPerson(personRepository);
    const getPersonController = new GetPersonController(getPerson);

    const response = await getPersonController.handle({
      body: {
        firstName: "Lionel",
        lastName: "Messi",
      },
    });
    res.status(response.statusCode).send(response.body);
  });

  app.post("/persons", async (req, res) => {
    const personRepository = new MongoPersonRepository();
    const setPerson = new SetPerson(personRepository);
    const setPersonController = new SetPersonController(setPerson);

    const response = await setPersonController.handle({ body: req.body });

    res.status(response.statusCode).json(response);
  });

  const port = process.env.PORT || 8000;
  app.listen(port, () => console.log(`listening on port ${port}!`));
};

main();
