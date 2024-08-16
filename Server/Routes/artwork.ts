import express from 'express';
const router = express.Router();
import passport from 'passport';

import { DisplayArtworkList, DisplayArtworkById, AddArtwork, UpdateArtwork, DeleteArtwork} from '../Controllers/artwork';


/* List of Artwork Routes (endpoints) */

/* GET Artwork List - fallback in case /list is not used */
router.get('/', (req, res, next) => {  DisplayArtworkList(req, res, next); });

/* GET Artwork List. */
router.get('/list', (req, res, next) => {  DisplayArtworkList(req, res, next); });

/* GET Artwork by ID. */
router.get('/find/:id', (req, res, next) => {  DisplayArtworkById(req, res, next); });

/* Add Artwork */
router.post('/add', /* passport.authenticate('jwt', {session: false}), */ (req, res, next) => {  AddArtwork(req, res, next); });

/* Update Artwork*/
router.put('/update/:id', /* passport.authenticate('jwt', {session: false}), */ (req, res, next) => {  UpdateArtwork(req, res, next); });

/* Delete Artwork*/
router.delete('/delete/:id', /* passport.authenticate('jwt', {session: false}), */ (req, res, next) => {  DeleteArtwork(req, res, next); });


export default router;
