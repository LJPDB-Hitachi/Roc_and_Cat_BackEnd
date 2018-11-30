"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var LA_Routes_1 = require("../routes/LA_Routes");
var FA_Routes_1 = require("../routes/FA_Routes");
var axios_1 = require("axios");
var FrontController = /** @class */ (function () {
    function FrontController() {
    }
    FrontController.prototype.testLA = function (req, res) {
        res.status(200).send({
            message: "GET request successful!!"
        });
    };
    FrontController.prototype.taggingFileProcess = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var passedRequest, finalOutput;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        passedRequest = req.body;
                        console.log("passed request: " + passedRequest);
                        return [4 /*yield*/, axios_1.default.post(FA_Routes_1.default.taggingFileProcess, passedRequest).then(function (response) {
                                //console.log(`response data: ${response.data}`);
                                //console.log(response.data.explanation);
                                return response.data;
                            })
                                .catch(function (error) {
                                //console.log(`error: ${error}`);
                                return error;
                            })];
                    case 1:
                        finalOutput = _a.sent();
                        console.log("await completed: " + finalOutput);
                        res.json(finalOutput);
                        return [2 /*return*/];
                }
            });
        });
    };
    FrontController.prototype.userValidation = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var passedRequest, finalOutput;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        passedRequest = req.body;
                        console.log("passed request: " + passedRequest);
                        return [4 /*yield*/, axios_1.default.post(LA_Routes_1.default.userValidation, passedRequest).then(function (response) {
                                //console.log(`response data: ${response.data}`);
                                //console.log(response.data.explanation);
                                return response.data;
                            })
                                .catch(function (error) {
                                //console.log(`error: ${error}`);
                                return error;
                            })];
                    case 1:
                        finalOutput = _a.sent();
                        console.log("await completed: " + finalOutput);
                        res.json(finalOutput);
                        return [2 /*return*/];
                }
            });
        });
    };
    FrontController.prototype.dataTaggingInit = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var passedRequest, finalOutput;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        passedRequest = req.body;
                        console.log("passed request: " + passedRequest);
                        return [4 /*yield*/, axios_1.default.post(LA_Routes_1.default.dataTaggingInit, passedRequest).then(function (response) {
                                //console.log(`response data: ${response.data}`);
                                //console.log(response.data.explanation);
                                return response.data;
                            })
                                .catch(function (error) {
                                //console.log(`error: ${error}`);
                                return error;
                            })];
                    case 1:
                        finalOutput = _a.sent();
                        console.log("await completed: " + finalOutput);
                        res.json(finalOutput);
                        return [2 /*return*/];
                }
            });
        });
    };
    FrontController.prototype.projectInit = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var passedRequest, finalOutput;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        passedRequest = req.body;
                        console.log("passed request: " + passedRequest);
                        return [4 /*yield*/, axios_1.default.post(LA_Routes_1.default.projectInit, passedRequest).then(function (response) {
                                //console.log(`response data: ${response.data}`);
                                //console.log(response.data.explanation);
                                return response.data;
                            })
                                .catch(function (error) {
                                //console.log(`error: ${error}`);
                                return error;
                            })];
                    case 1:
                        finalOutput = _a.sent();
                        console.log("await completed: " + finalOutput);
                        res.json(finalOutput);
                        return [2 /*return*/];
                }
            });
        });
    };
    FrontController.prototype.projectCreation = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var passedRequest, finalOutput;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        passedRequest = req.body;
                        console.log("passed request: " + passedRequest);
                        return [4 /*yield*/, axios_1.default.post(LA_Routes_1.default.projectCreation, passedRequest).then(function (response) {
                                //console.log(`response data: ${response.data}`);
                                //console.log(response.data.explanation);
                                return response.data;
                            })
                                .catch(function (error) {
                                //console.log(`error: ${error}`);
                                return error;
                            })];
                    case 1:
                        finalOutput = _a.sent();
                        console.log("await completed: " + finalOutput);
                        res.json(finalOutput);
                        return [2 /*return*/];
                }
            });
        });
    };
    return FrontController;
}());
exports.FrontController = FrontController;
exports.frontController = new FrontController();
//# sourceMappingURL=Front_Controller.js.map