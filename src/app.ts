import * as express from "express";
import * as postAPI from "./api";
import {UserController} from "./controller/UserController";

export class App {
  public express: any;

  constructor() {
    this.express = express();
    this.express.use(express.json());
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const userController = new UserController
    const router = express.Router();
    router.get("/", (req, res) => {
      res.json({
        message: "Hello World!",
      });
    });
    router.get("/posts", (req, res) => {
      res.json(postAPI.getPost());
    });

    router.post('/write', ( req, res) => {
        console.log(req.body);
         try {
          res.json({message: "ok"});
        } catch (error) {
          console.log(error);
          res.json({message: "error"});
        }
      }
    );

    // User
    router.get("/user/:id", async (req, res) => {
      res.json(await userController.one(req, res));
    });

    this.express.use("/", router);
  }
}
