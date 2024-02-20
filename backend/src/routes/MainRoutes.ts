import express from "express";
import bodyParser from "body-parser";
import noteRoute from "./noteRoutes";
import tagRoute from "./tagRoutes";
import userRoutes from "./userRoutes";
import { auth } from "express-openid-connect";

export class MainRoutes {
  public app: express.Application = express();
  public auth0Config = {
    authRequired: true,
    auth0Logout: true,
    baseURL: "http://localhost:3000",
    clientID: "",
    issuerBaseURL: "",
    secret: "",
  };
  constructor() {
    this.config();
    this.setRoutes();
  }

  config() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(express.json());
    this.app.use(auth(this.auth0Config));
  }

  setRoutes() {
    this.app.use("/note", noteRoute);
    this.app.use("/tag", tagRoute);
    this.app.use("/user", userRoutes);
  }
}
