"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
const server = app.listen(3002, () => {
    console.log(`Server listning from port ${3002}..`, server.address());
});
app.get('/', (req, res) => {
    console.log('Request has been received. ', JSON.stringify(req.url)); // How to do coma coma variable like
    res.send(`Your request has been received...!`);
});
app.get('/users', (req, res) => {
    console.log(`Request url '${req.url}'`);
    res.send('Your request has been received, will send you the users list soon..!');
});
