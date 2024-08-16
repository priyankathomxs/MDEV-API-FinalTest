"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const artwork_1 = require("../Controllers/artwork");
router.get('/', (req, res, next) => { (0, artwork_1.DisplayArtworkList)(req, res, next); });
router.get('/list', (req, res, next) => { (0, artwork_1.DisplayArtworkList)(req, res, next); });
router.get('/find/:id', (req, res, next) => { (0, artwork_1.DisplayArtworkById)(req, res, next); });
router.post('/add', (req, res, next) => { (0, artwork_1.AddArtwork)(req, res, next); });
router.put('/update/:id', (req, res, next) => { (0, artwork_1.UpdateArtwork)(req, res, next); });
router.delete('/delete/:id', (req, res, next) => { (0, artwork_1.DeleteArtwork)(req, res, next); });
exports.default = router;
//# sourceMappingURL=artwork.js.map