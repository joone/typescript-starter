import * as express from "express";
import * as postAPI from "./api";

class App {
  public express: any;

  constructor() {
    this.express = express();
    this.express.use(express.json());
    this.mountRoutes();
  }

  private mountRoutes(): void {
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

    this.express.use("/", router);
  }
}

export default new App().express;
