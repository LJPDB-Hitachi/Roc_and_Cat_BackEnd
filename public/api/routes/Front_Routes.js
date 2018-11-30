"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Front_Controller_1 = require("../controllers/Front_Controller");
var FrontRoutes = /** @class */ (function () {
    function FrontRoutes() {
        this.router = express.Router();
        this.config();
    }
    FrontRoutes.prototype.config = function () {
        this.router.get("/testLA/", function (req, res) {
            return Front_Controller_1.frontController.testLA(req, res);
        });
        this.router.post("/taggingFileProcess/", function (req, res) {
            return Front_Controller_1.frontController.taggingFileProcess(req, res);
        });
        this.router.post("/userValidation/", function (req, res) {
            return Front_Controller_1.frontController.userValidation(req, res);
        });
        this.router.post("/dataTaggingInit/", function (req, res) {
            return Front_Controller_1.frontController.dataTaggingInit(req, res);
        });
        this.router.post("/projectInit/", function (req, res) {
            return Front_Controller_1.frontController.projectInit(req, res);
        });
        this.router.post("/projectCreation/", function (req, res) {
            return Front_Controller_1.frontController.projectCreation(req, res);
        });
    };
    return FrontRoutes;
}());
exports.frontRoutes = new FrontRoutes().router;
//# sourceMappingURL=Front_Routes.js.map