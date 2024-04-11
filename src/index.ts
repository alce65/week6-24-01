import { createServer } from 'http';
import 'dotenv/config';

const port = process.env.PORT ?? 3000;

const server = createServer((req, res) => {
  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.end();
    return;
  }

  if (req.url === '/hola') {
    res.end('Hola mundo');
    return;
  }

  res.end('Hola gentes');
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
