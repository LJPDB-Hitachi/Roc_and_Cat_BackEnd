Object.defineProperty(exports, "__esModule", { value: true });
var MainController = /** @class */ (function () {
    function MainController() {
    }
    MainController.prototype.root = function (req, res) {
        res.status(200).send({
            message: "GET request successful!!"
        });
    };
    return MainController;
}());
exports.MainController = MainController;
exports.mainController = new MainController();
