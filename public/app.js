"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
//import * as io from "socket.io"; 
var MainRoutes_1 = require("./api/routes/MainRoutes");
var Front_Routes_1 = require("./api/routes/Front_Routes");
//const router = express.Router();
var App = /** @class */ (function () {
    // public http: http.Server;
    function App() {
        this.app = express();
        //this.http.addListener(event:"listen", listener:(this.app));
        this.config();
    }
    App.prototype.config = function () {
        // support for comunication with frontE
        //   this.app.set("io",io);
        // support application/json
        this.app.use(bodyParser.json());
        this.app.set('port', process.env.PORT || 3000);
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: true }));
        //this.app.use(express.static(__dirname+"/front"));  
        // Routing
        // Routing
        // this.app.use(this.app.router)
        this.app.use("/", MainRoutes_1.mainRoutes);
        this.app.use("/frontR", Front_Routes_1.frontRoutes);
    };
    return App;
}());
//tost
exports.default = new App().app;
//# sourceMappingURL=app.js.map