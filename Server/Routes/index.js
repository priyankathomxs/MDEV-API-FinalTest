"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let router = express_1.default.Router();
const movie_1 = require("../Controllers/movie");
const stripe_1 = require("../Controllers/stripe");
router.get('/', (req, res, next) => {
    res.json({ message: 'Welcome to Express API' });
});
router.get('/:id', (req, res, next) => {
    (0, movie_1.DisplayMovieByID)(req, res, next);
});
router.post('/', (req, res, next) => {
    (0, movie_1.AddMovie)(req, res, next);
});
router.put('/:id', (req, res, next) => {
    (0, movie_1.UpdateMovie)(req, res, next);
});
router.delete('/:id', (req, res, next) => {
    (0, movie_1.DeleteMovie)(req, res, next);
});
router.post('/payment', (req, res, next) => {
    (0, stripe_1.CreatePaymentIntent)(req, res, next);
});
exports.default = router;
//# sourceMappingURL=index.js.map