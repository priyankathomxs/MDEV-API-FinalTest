import express from 'express';
let router = express.Router();

/* Get the movie Controller */
import { DisplayMovieList, DisplayMovieByID, AddMovie, UpdateMovie, DeleteMovie } from '../Controllers/movie';
import { CreatePaymentIntent } from '../Controllers/stripe';

/* GET /api/movies - display the movie list */
router.get('/', (req, res, next) => 
{
  //DisplayMovieList(req, res, next);
  // send a simple message to the client
  res.json({message: 'Welcome to Express API'});
});

/* GET /api/movies/:id - display a movie by id */
router.get('/:id', (req, res, next) => 
{
  DisplayMovieByID(req, res, next);
});

/* POST /api/movies - add a new movie */
router.post('/', (req, res, next) => 
{
  AddMovie(req, res, next);
});

/* PUT /api/movies/:id - update a movie by id */
router.put('/:id', (req, res, next) => 
{
  UpdateMovie(req, res, next);
});

/* GET /api/movies/:id - delete a movie by id */
router.delete('/:id', (req, res, next) => 
{
  DeleteMovie(req, res, next);
});

/* POST /api/payment - process payment */
router.post('/payment', (req, res, next) => {
  CreatePaymentIntent(req, res, next);
});

export default router;
