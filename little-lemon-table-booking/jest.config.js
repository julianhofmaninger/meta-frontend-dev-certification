// import type {Config} from '@jest/types';
// // Sync object
// const config: Config.InitialOptions = {
//   // verbose: true,
//   // transform: { "^.+\\.tsx?$": ["ts-jest", {"rootDir": "."}] },
//   // moduleNameMapper: {
//   //   '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
//   //     '<rootDir>/__mocks__/fileMock.js',
//   //   '\\.(css|less)$': 'identity-obj-proxy',
//   // },

//   transform: {
//     '^.+\\.ts?$': 'ts-jest'
//   },
//   testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
//   moduleFileExtensions: ['ts', 'js', 'json', 'node'],
//   collectCoverage: true,
//   clearMocks: true,
//   coverageDirectory: "coverage",
// };
// export default config;

module.exports = {
  verbose: true,
  transform: { "^.+\\.tsx?$": ["ts-jest", {"rootDir": "."}] },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
};