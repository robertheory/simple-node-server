const http = require('http');
const port = process.env.PORT || 3333;

http
  .createServer((_, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    const envVars = process.env;

    res.write('Hello, world from Simple NodeJS Server! 🤖');

    res.write('\n\n');
    res.write(JSON.stringify(envVars, null, 2));
    res.end();
  })
  .listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
  });
