'use strict';

const localClient = require('..');
const assert = require('assert').strict;

assert.strictEqual(localClient(), 'Hello from localClient');
console.info('localClient tests passed');
