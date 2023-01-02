"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_fetch_1 = __importDefault(require("node-fetch"));
var app = (0, express_1.default)();
const server = app.listen(3000, () => {
    console.log(`\n----------* Server Started *--------`);
    console.log(`Server is running 'http://localhost:${3000}'`);
});
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Request - '${req.hostname}'`);
    // const details = getZipCodeDetails(2)
    // console.log('12-', details);
    // res.send(details)
    const response = yield (0, node_fetch_1.default)('https://api.zippopotam.us/us/75024');
    const data = yield response.json();
    res.send(data);
}));
function call1() {
    setTimeout(() => {
        console.log('In');
    }, 4000);
}
const getZipCodeDetails1 = (zipcode) => __awaiter(void 0, void 0, void 0, function* () {
    const details = yield (0, node_fetch_1.default)('https://api.zippopotam.us/us/75024')
        .then((res) => {
        console.log('1111111111111111111');
        return res.json();
    }).then((data) => {
        console.log('asdfasdfasdfasdfasdfasdfasdfasdfasdf');
        // Promise.resolve(data)
        return data;
    });
    console.log('asdfasdfasdf-');
    console.log(details);
    return details;
});
function getZipCodeDetails(zipcode) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(1);
        const res = yield (0, node_fetch_1.default)('https://api.zippopotam.us/us/75024');
        const data = yield res.json();
        console.log('12');
        console.log('12-', data);
        return data;
    });
}
// HELLO PUNIT
