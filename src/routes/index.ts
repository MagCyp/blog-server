import * as express from "express";

import middlewares from "../middlewares";

import { postRt } from "./post-rt";

const indexRouter = express.Router();

indexRouter.use(middlewares.combine);

indexRouter.use(postRt);

export default indexRouter;
