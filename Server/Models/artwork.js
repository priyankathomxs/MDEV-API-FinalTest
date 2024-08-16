"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let artworkSchema = new mongoose_1.Schema({
    artworkID: String,
    title: String,
    artist: String,
    medium: String,
    subject: [String],
    yearCreated: Number,
    description: String,
    dimensions: Number,
    imageURL: String,
    style: [String],
    currentLocation: String
});
let Artwork = (0, mongoose_1.model)('Artwork', artworkSchema);
exports.default = Artwork;
//# sourceMappingURL=artwork.js.map