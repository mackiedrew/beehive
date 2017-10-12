const { Mongo } = require('./mongo');

const Meteor = {
  isServer: true,
  isTest: true,
  loginWithPassword: jest.fn(),
  loginWithFacebook: jest.fn(),
  methods: jest.fn(),
  call: jest.fn(),
  callPromise: jest.fn(),
  publish: jest.fn(),
  subscribe: jest.fn(),
  user: jest.fn(),
  users: new Mongo.Collection(),
  userId: jest.fn().mockReturnValue('f00bar'),
  startup: jest.fn(),
  bindEnvironment: jest.fn(),
  wrapAsync: jest.fn(),
  Error: jest.fn((name, message, details) => new Error(`${name} ${message} ${details}`))
};

module.exports = { Meteor };
