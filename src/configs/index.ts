import * as dotEnvConfig from "dotenv-flow";

const rootPath = process.cwd();
dotEnvConfig.config({ path: `${rootPath}/src/envs` });

export const database = {
  uri: process.env.MONGO_URL || "",
};

export const port = process.env.PORT || 3003;
