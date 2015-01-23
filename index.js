#!/usr/bin/env node
process.env.NODE_ENV = process.argv[2] || 'development';
if (['-h', '--help'].indexOf(process.argv[2]) > -1) {
    console.log([
            'usage:',
            '    show-node-config -h/--help:',
            '        show this help',
            '    show-node-config [env]:',
            '        show config in [env] environment, [env] defaults to "development", same as run NODE_ENV=[env] show-node-config'
    ].join('\n'));
} else {
    var modpath = require('resolve').sync('config', { basedir: process.cwd() });
    console.log(JSON.stringify(require(modpath), null, '  '));
}
