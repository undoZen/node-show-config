#!/usr/bin/env node
process.env.NODE_ENV = process.argv[2] || 'development';
console.log(JSON.stringify(require('config'), void '', '  '));
