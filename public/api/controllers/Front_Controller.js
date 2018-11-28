"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FrontController = /** @class */ (function () {
    function FrontController() {
    }
    FrontController.prototype.testLA = function (req, res) {
        res.status(200).send({
            message: "GET request successful!!"
        });
    };
    return FrontController;
}());
exports.FrontController = FrontController;
exports.frontController = new FrontController();
//# sourceMappingURL=Front_Controller.js.map