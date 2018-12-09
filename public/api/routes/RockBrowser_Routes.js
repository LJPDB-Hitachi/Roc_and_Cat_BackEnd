Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var RockBrowser_Controller_1 = require("../controllers/RockBrowser_Controller");
var RockBrowserRoutes = /** @class */ (function () {
    function RockBrowserRoutes() {
        this.router = express.Router();
        this.config();
    }
    RockBrowserRoutes.prototype.config = function () {
        this.router.post("/searchAllMatches/", function (req, res) {
            return RockBrowser_Controller_1.rockBrowserController.searchAllMatches(req, res);
        });
    };
    return RockBrowserRoutes;
}());
exports.rockBrowserRoutes = new RockBrowserRoutes().router;
