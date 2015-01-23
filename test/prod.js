var path = require('path');
var tape = require('tape');
var execFile = require('child_process').execFile;
tape('config for dev env', function (test) {
    test.plan(1);
    execFile(process.execPath, [path.resolve(__dirname, '..', 'index.js'), 'production'], {
        cwd: __dirname,
        env: process.env }, function (err, stdout, stderr) {
            test.deepEqual(JSON.parse(stdout), { a: 2 });
        });
});
