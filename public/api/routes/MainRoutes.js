Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var MainRoutes_Controller_1 = require("../controllers/MainRoutes_Controller");
var MainRoutes = /** @class */ (function () {
    function MainRoutes() {
        this.router = express.Router();
        this.config();
    }
    MainRoutes.prototype.config = function () {
        this.router.get("/", function (req, res) {
            return MainRoutes_Controller_1.mainController.root(req, res);
        });
    };
    return MainRoutes;
}());
exports.mainRoutes = new MainRoutes().router;
