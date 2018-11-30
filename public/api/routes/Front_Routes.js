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
        this.router.post("/getTaggingForm/", function (req, res) {
            return Front_Controller_1.frontController.getTaggingForm(req, res);
        });
        this.router.post("/dataTaggingReq1/", function (req, res) {
            return Front_Controller_1.frontController.dataTaggingReq1(req, res);
        });
        this.router.post("/dataTaggingReq2/", function (req, res) {
            return Front_Controller_1.frontController.dataTaggingReq1(req, res);
        });
        this.router.post("/projectInit/", function (req, res) {
            return Front_Controller_1.frontController.dataTaggingReq1(req, res);
        });
        this.router.post("/projectCreation/", function (req, res) {
            return Front_Controller_1.frontController.dataTaggingReq1(req, res);
        });
    };
    return FrontRoutes;
}());
exports.frontRoutes = new FrontRoutes().router;
//# sourceMappingURL=Front_Routes.js.map