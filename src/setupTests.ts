import '@testing-library/jest-dom';
require('jest-fetch-mock').enableMocks()
export const mockGeolocation = {
    getCurrentPosition: jest.fn(),
    watchPosition: jest.fn()
  };
  //@ts-ignore
global.navigator.geolocation = mockGeolocation;