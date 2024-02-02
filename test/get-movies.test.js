import { expect, jest } from '@jest/globals';

import { get_movies } from "../javascript/get-movies";
import { OPTIONS, API_URL } from "../javascript/constants";

import { setupFetchMock } from './mocks/fetchMock';

it('Should return a list of movies', async  () => {
    const movies = await get_movies();
    expect(Array.isArray(movies)).toBe(true);
    expect(movies.length).toBeGreaterThan(0);
})

it('Should return status 200', async () => {
    setupFetchMock();
    await get_movies();
    expect(global.fetch).toHaveBeenCalledWith(API_URL, OPTIONS);
});

it('Should handle errors', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('Network error')));
    await expect(get_movies()).rejects.toThrow('Network error');
})