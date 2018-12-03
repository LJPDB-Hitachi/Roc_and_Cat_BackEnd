import * as express from "express";
import * as bodyParser from "body-parser";
//import * as io from "socket.io"; 
import { mainRoutes } from "./api/routes/MainRoutes";
import { frontRoutes } from "./api/routes/Front_Routes";
//const router = express.Router();

class App {
  public app: express.Application;
 // public http: http.Server;

  constructor() {
    this.app = express();
    //this.http.addListener(event:"listen", listener:(this.app));
    this.config();
  }
  private config(): void {
    // support for comunication with frontE
 //   this.app.set("io",io);
    // support application/json
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.set('port', process.env.PORT || 3000);
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: true }));
    //this.app.use(express.static(__dirname+"/front"));  
    // Routing
    // Routing
   // this.app.use(this.app.router)
    this.app.use("/", mainRoutes);
    this.app.use("/rocycat_fe", frontRoutes);
    //this.app.use("/frontR", frontRoutes);  
  }
}
//tost
export default new App().app;