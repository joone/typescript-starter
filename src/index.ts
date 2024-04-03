import * as yargs from "yargs";

import app from "./app";
import * as postAPI from "./api";
import * as config from "./config.json";

const port = process.env.PORT || config.server.port;

const args = yargs
  .wrap(null)
  .command("$0 [server]", "typescript-starter", (yargs) => {
    yargs.positional("server", {
      description: "Run a web server",
      type: "string",
    });
  })
  .options({
    git: {
      alias: "api",
      describe:
        "Execute a REST API call",
    },
  })
  .help()
  .parseSync();

(() => {
  if (args.api) {
    switch (args.api) {
      case "getPost":
        console.log(postAPI.getPost());
        break;
      default:
        console.log("Unknown API");
    }
  } else {
    if (args.server) {
      app.listen(port, () => {
        return console.log(`server is listening on ${port}`);
      });
    }
  }
})();


