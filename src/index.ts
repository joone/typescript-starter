import {createConnection} from "typeorm";

import app from "./app";
import {User} from "./entity/User";

import * as config from "./config.json";

const port = process.env.PORT || config.server.port;

// create typeorm connection
createConnection().then(async connection => {
    const userRepository = connection.getRepository(User);

    // start express server
    app.listen(port, () => {
      return console.log(`server is listening on ${port}`);
    });

     // insert new users for test
    await connection.manager.save(connection.manager.create(User, {
        firstName: "Timber",
        lastName: "Saw",
        age: 27
    }));
    await connection.manager.save(connection.manager.create(User, {
        firstName: "Phantom",
        lastName: "Assassin",
        age: 24
    }));

}).catch(error => console.log(error));
