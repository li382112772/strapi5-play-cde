/**
 * Genre Service
 * This service contains the business logic related to genres.
 */

import { factories } from '@strapi/strapi';

/**
 * @module GenreService
 * A service for managing genre-related business logic.
 */
const GenreService = factories.createCoreService('api::genre.genre');

/**
 * Example business logic method to find genres.
 * @returns {Promise<Array>} An array of genre objects.
 */
const findGenres = async (params) => {
  return await GenreService.findMany(params);
};

/**
 * Example business logic method to create a new genre.
 * @param {Object} data - The data for the new genre.
 * @returns {Promise<Object>} The created genre object.
 */
const createGenre = async (data) => {
  return await GenreService.create(data);
};

/**
 * Example business logic method to update an existing genre.
 * @param {Object} params - Parameters to locate genre.
 * @param {Object} data - Updated genre data.
 * @returns {Promise<Object>} The updated genre object.
 */
const updateGenre = async (params, data) => {
  return await GenreService.update(params, data);
};

/**
 * Example business logic method to delete a genre.
 * @param {Object} params - Parameters to locate genre.
 * @returns {Promise<Object>} The deleted genre object.
 */
const deleteGenre = async (params) => {
  return await GenreService.delete(params);
};

export default {
  ...GenreService,
  findGenres,
  createGenre,
  updateGenre,
  deleteGenre,
};