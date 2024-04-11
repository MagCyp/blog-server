import * as fs from "fs";

const pathsPWD = `${process.cwd()}/src/docs/swagger/paths`;
const schemasPWD = `${process.cwd()}/src/docs/swagger/schemas`;
const paths = fs
  .readdirSync(pathsPWD)
  .reduce(
    (acc, file) => Object.assign(acc, require(`${pathsPWD}/${file}`)),
    {}
  );

const schemas = fs
  .readdirSync(schemasPWD)
  .reduce(
    (acc, file) => Object.assign(acc, require(`${schemasPWD}/${file}`)),
    {}
  );

export default {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Blog server API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3002/",
        description: "local",
      },
    ],
    components: {
      schemas,
    },
    paths,
  },
  apis: [],
};
