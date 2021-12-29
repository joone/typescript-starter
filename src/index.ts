import { createConnection } from "typeorm";
import { App } from "./app";

import * as config from "./config.json";

const port = process.env.PORT || config.server.port;

// create typeorm connection
createConnection()
  .then(async (connection) => {
    // start express server
    const app = new App().express;

    app.listen(port, () => {
      return console.log(`server is listening on ${port}`);
    });
  })
  .catch((error) => console.log(error));
