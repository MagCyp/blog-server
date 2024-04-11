import { extname } from "path";
import fs from "fs";

import * as express from "express";

import middlewares from "../middlewares";
import { objects } from "../helpers";

const ext = extname(__filename);

const indexRouter = express.Router();

indexRouter.use(middlewares.combine);

fs.readdirSync(__dirname)
  .filter((file) => objects.isNotIndex(file, ext))
  .forEach((file) => {
    const route = require(`./${file}`);
    if (route.router && typeof route.router === "function") {
      indexRouter.use(route.router);
    } else {
      console.error(`File ${file} does not export an Express router`);
    }
  });

export default indexRouter;
