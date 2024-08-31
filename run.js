// const { exec  } = require('child_process');
// exec('get.exe');
const path = require('path');
const spawn = require('child_process').spawn
const ls    = spawn(path.join(__dirname, 'get.exe'));

ls.stdout.on('data', function (data) {
  console.log('stdout: ' + data.toString());
});

ls.stderr.on('data', function (data) {
  console.log('stderr: ' + data.toString());
});

ls.on('exit', function (code) {
  console.log('child process exited with code ' + code.toString());
});
// const http = require('http');

// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello World\n 123');
// }).listen(8080);

