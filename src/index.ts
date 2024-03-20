import { App } from "./app";
import * as config from "./config.json";

const port = process.env.PORT || config.server.port;
const app = new App().express;
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});