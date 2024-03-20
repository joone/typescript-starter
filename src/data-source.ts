import { DataSource } from "typeorm";
import { User } from "./entity/User"; // Adjust the import based on your entity

export const AppDataSource = new DataSource({
    type: "mongodb",
    host: "localhost",
    port: 27017,
    database: "test",
    entities: [User],
    synchronize: true,
    useUnifiedTopology: true,
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });
