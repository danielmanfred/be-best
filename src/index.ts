import express from "express";
import { config } from "dotenv";
import { GetPersonController } from "./application/controllers/get-person/get-person-controller";
import { GetPerson } from "./application/usercases/get-person/get-person";
import { MongoPersonRepository } from "./application/repositories/person-repository/mongo-person-repository";
import { MongoClient } from "./application/database/mongo";

const main = async () => {
  config();
  const app = express();
  await MongoClient.connect();

  app.get("/person", async (req, res) => {
    const personRepository = new MongoPersonRepository();
    const getPerson = new GetPerson(personRepository);
    const getPersonController = new GetPersonController(getPerson);
    const response = await getPersonController.handle({
      firstName: "Daniel",
      lastName: "Brito",
    });
    res.status(response.statusCode).send(response.body);
  });

  const port = process.env.PORT || 8000;
  app.listen(port, () => console.log(`listening on port ${port}!`));
};

main();
