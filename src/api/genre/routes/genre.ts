/**
 * Genre Router
 * This file configures the routes for the Genre API.
 */

import { factories } from '@strapi/strapi';

/**
 * Define the routes for the Genre API.
 * @module GenreRouter
 */
const genreRouter = factories.createCoreRouter('api::genre.genre');

// Custom routes can be defined here
// Example route: genreRouter.get('/custom-route', customControllerMethod);

export default genreRouter;