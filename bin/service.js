#!/usr/bin/env node
require('http').globalAgent.maxSockets = Infinity;

require('dnscache')({
  enable: true,
  ttl: 5,
  cachesize: 1000,
});

require('../src/')
  .start(require('../config').default);
