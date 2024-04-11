import express from "express";
import http from "http";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import { database, port } from "./src/configs/index";
import routers from "./src/routes/index";

const app = express();
const server = http.createServer(app);

mongoose.set("strictQuery", false);
(async () => await mongoose.connect(database.uri))()
  .catch((err) => console.error(err))
  .then(() => console.log("Connection to Mongoose"));

app.use(bodyParser.json());
app.use(cors());

app.use("/", routers);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

server.listen(port, () => console.log(`listening on port ${port}`));
