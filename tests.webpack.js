require('babel-polyfill');

const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);
chai.use(chaiEnzyme());

const context = require.context('./src', true, /\.spec\.js$/);
context.keys().forEach(context);
