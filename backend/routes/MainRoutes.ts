import express from "express"
import bodyParser from "body-parser";
import noteRoute from "./noteRoutes";
import tagRoute from "./tagRoutes";

export class MainRoutes {
  public app: express.Application = express();
  
  constructor() {
    this.config();
    this.setRoutes();
  }

  config() {

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(express.json());
  }

  setRoutes() {
    this.app.use("/note", noteRoute);
    this.app.use("/tag", tagRoute);
  }
}
