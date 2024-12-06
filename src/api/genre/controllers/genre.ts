/**
 * Genre Controller
 * This controller manages the logic for Genre-related API operations.
 */

import { factories } from '@strapi/strapi';

/**
 * @module GenreController
 * A controller for managing genre-related logic.
 */
const GenreController = factories.createCoreController('api::genre.genre');

/**
 * Get a list of genres.
 * @returns {Promise<Array>} An array of genre objects.
 */
const findGenres = async (ctx) => {
  const { results } = await GenreController.find(ctx);
  ctx.body = results;
};

/**
 * Create a new genre.
 * @param {Object} ctx - The request context.
 * @returns {Promise<Object>} The created genre object.
 */
const createGenre = async (ctx) => {
  const { result } = await GenreController.create(ctx);
  ctx.body = result;
};

/**
 * Update an existing genre.
 * @param {Object} ctx - The request context.
 * @returns {Promise<Object>} The updated genre object.
 */
const updateGenre = async (ctx) => {
  const { result } = await GenreController.update(ctx);
  ctx.body = result;
};

/**
 * Delete a genre.
 * @param {Object} ctx - The request context.
 * @returns {Promise<Object>} The deleted genre object.
 */
const deleteGenre = async (ctx) => {
  const { result } = await GenreController.delete(ctx);
  ctx.body = result;
};

// Adding custom routes for additional operations
export default {
  ...GenreController,
  findGenres,
  createGenre,
  updateGenre,
  deleteGenre,
};