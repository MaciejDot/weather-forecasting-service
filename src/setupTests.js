import '@testing-library/jest-dom';
require('jest-fetch-mock').enableMocks()
export const mockGeolocation = {
    getCurrentPosition: jest.fn(),
    watchPosition: jest.fn()
  };
global.navigator.geolocation = mockGeolocation;