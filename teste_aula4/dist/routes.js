"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const router = (0, express_1.Router)();
router.use(body_parser_1.default.json());
// Banco de dados
//const todo:Todo[] = []
const todo = [
    {
        id: 1,
        task: 'Comer'
    }
];
function autheticateToken(req, res, next) {
    const token = req.header('Key_Postman'); // key do postman
    if (token === 'admin123') {
        next();
    }
    else {
        res.status(400).json({ message: 'Errooooooou' });
    }
}
router.use(autheticateToken);
router.get('/todos', (req, res) => {
    //res.status(200).json(todo)
    res.status(200).send(todo);
});
exports.default = router;
