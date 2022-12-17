var express = require("express");
var app = express();
//import { getUsers } from "./db.json";
const getUsers = require("./db.json");

app.get("/users", (req, resp) => {
  console.log("***", getUsers);
  let name = req.query.name;
  let filterByName = getUsers.filter((user) => user.name === name);
  console.log("filter", filterByName);
  //resp.status(200).send(getUsers);
  resp.status(200).send(filterByName);
});

app.get("/:name", function (req, res) {
  // res.send("name: " + req.params.name);
  res.send("name: " + req.query.name);
});

app.listen(1337, () => {
  console.log("port............1337");
});
