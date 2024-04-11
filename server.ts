import express from "express";
import http from "http";
import mongoose from "mongoose";

import { database, port } from "./src/configs/index";

const app = express();
const server = http.createServer(app);

mongoose.set("strictQuery", false);
(async () => await mongoose.connect(database.uri))()
  .catch((err) => console.error(err))
  .then(() => console.log("Connection to Mongoose"));

app.get("/", (req, res) => {
  res.send(`Hello, world!`);
});

server.listen(port, () => console.log(`listening on port ${port}`));
