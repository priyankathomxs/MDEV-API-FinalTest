"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteArtwork = exports.UpdateArtwork = exports.AddArtwork = exports.DisplayMovieById = exports.DisplayMovieList = void 0;
const artwork_1 = __importDefault(require("../Models/artwork"));
const Util_1 = require("../Util");
function DisplayMovieList(req, res, next) {
    artwork_1.default.find({})
        .then((data) => {
        res.status(200).json({ success: true, msg: "Artwork List Retrieved and Displayed", data: data, token: null });
    })
        .catch((err) => {
        console.error(err);
    });
}
exports.DisplayMovieList = DisplayMovieList;
function DisplayMovieById(req, res, next) {
    let id = req.params.id;
    if (id.length != 24) {
        res.status(400).json({ success: false, msg: "A valid ID is required to retrieve a Artwork", data: null, token: null });
    }
    else {
        Artwork.findById({ _id: id })
            .then((data) => {
            if (data) {
                res.status(200).json({ success: true, msg: "One Artwork Restrived and Displayed", data: data, token: null });
            }
            else {
                res.status(404).json({ success: false, msg: "Artwork not found", data: null, token: null });
            }
        })
            .catch((err) => {
            console.error(err);
        });
    }
}
exports.DisplayMovieById = DisplayMovieById;
function AddArtwork(req, res, next) {
    let style = (req.body.style) ? (0, Util_1.SanitizeArray)(req.body.style) : (0, Util_1.SanitizeArray)("");
    let subject = (req.body.subject) ? (0, Util_1.SanitizeArray)(req.body.subject) : (0, Util_1.SanitizeArray)("");
    let artwork = new Artwork({
        artworkID: req.body.artworkID,
        title: req.body.title,
        artist: req.body.artist,
        medium: req.body.medium,
        subject: subject,
        yearCreated: req.body.yearCreated,
        description: req.body.description,
        dimensions: req.body.dimensions,
        imageURL: req.body.imageURL,
        style: style,
        currenLocation: req.body.currenLocation
    });
    Artwork.create(artwork)
        .then(() => {
        res.status(200).json({ success: true, msg: "Artwork added", data: movie, token: null });
    })
        .catch((err) => {
        console.error(err);
    });
}
exports.AddArtwork = AddArtwork;
function UpdateArtwork(req, res, next) {
    let id = req.params.id;
    if (id.length != 24) {
        res.status(400).json({ success: false, msg: "A valid ID is required to update a artwork", data: null, token: null });
    }
    else {
        let style = (req.body.style) ? (0, Util_1.SanitizeArray)(req.body.style) : (0, Util_1.SanitizeArray)("");
        let subject = (req.body.subject) ? (0, Util_1.SanitizeArray)(req.body.subject) : (0, Util_1.SanitizeArray)("");
        let artworkToUpdate = new Artwork({
            artworkID: req.body.artworkID,
            title: req.body.title,
            artist: req.body.artist,
            medium: req.body.medium,
            subject: subject,
            yearCreated: req.body.yearCreated,
            description: req.body.description,
            dimensions: req.body.dimensions,
            imageURL: req.body.imageURL,
            style: style,
            currenLocation: req.body.currenLocation
        });
        console.log(artworkToUpdate);
        artwork_1.default.updateOne({ _id: id }, artworkToUpdate)
            .then(() => {
            res.status(200).json({ success: true, msg: "Artwork updated", data: artworkToUpdate, token: null });
        })
            .catch((err) => {
            console.error(err);
        });
    }
}
exports.UpdateArtwork = UpdateArtwork;
function DeleteArtwork(req, res, next) {
    let id = req.params.id;
    if (id.length != 24) {
        res.status(400).json({ success: false, msg: "A valid ID is required to delete an artwork", data: null, token: null });
    }
    else {
        Artwork.deleteOne({ _id: id })
            .then(() => {
            res.status(200).json({ success: true, msg: "Artwork deleted", data: id, token: null });
        })
            .catch((err) => {
            console.error(err);
        });
    }
}
exports.DeleteArtwork = DeleteArtwork;
//# sourceMappingURL=artwork.js.map