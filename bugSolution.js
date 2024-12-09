const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use.`);
    process.exit(1); // Exit with an error code
  } else {
    console.error(`Server error:`, err);
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});