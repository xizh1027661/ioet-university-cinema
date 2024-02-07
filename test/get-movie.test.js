import { expect, jest } from '@jest/globals';

import { get_movie } from "../javascript/get-movie";

function generateRandomString(length) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * charset.length);
      result += charset[index];
    }
    return result;
};

it('Should return a movie', async  () => {
    const movieId = 'tt0119217' //This id was extracted from the test API web page
    const movie = await get_movie(movieId);
    expect(movie).toEqual(expect.any(Object));
    expect(movie).not.toEqual({});
});

it('Should return an error', async  () => {
    const movieId = generateRandomString(9)
    const movie = await get_movie(movieId);
    expect(movie).toBeDefined();
    expect(movie).toBe(null);
});
