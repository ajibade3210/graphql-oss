const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const data = {
  Todo: [
    { id: "001", name: "Make money" },
    { id: "002", name: "Rent apartment" },
    { id: "003", name: "Make more more" },
    { id: "004", name: "Get girlfriend" },
  ],
};

const app = express();
const port = 8800;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.send("Hello, GraphQL!");
});

app.listen(port, () => {
  console.log(`Running a server at http://localhost:${port}`);
});
