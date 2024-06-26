"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// server.js
const app_js_1 = __importDefault(require("./app.js"));
const connection_js_1 = __importDefault(require("./db/connection.js"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT || 5000;
(0, connection_js_1.default)().then(() => {
    app_js_1.default.listen(PORT, () => console.log("Server and Database Connected"));
}).catch((err) => console.log(err));
