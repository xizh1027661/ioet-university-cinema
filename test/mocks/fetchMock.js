import { jest } from '@jest/globals';

export const setupFetchMock  = () => {
    global.fetch = jest.fn(() =>
    Promise.resolve({
        status: 200,
        text: () => Promise.resolve('{"results": []}')
        })
    );
};