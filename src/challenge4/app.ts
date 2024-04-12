import { type IncomingMessage, type ServerResponse } from 'http';

export const app = (req: IncomingMessage, res: ServerResponse) => {
  console.log('Request received');
  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.end();
    return;
  }

  // '/calculator?x=35&y=45'

  if (!req.url?.includes('calculator')) {
    console.log('Not found calculator');
    res.statusCode = 200;
    res.end(
      `
        <h1>No encontrado</h1>
        <p>The requested URL was not found on this server.</p>
      `
    );
    return;
  }

  if (!req.url?.includes('?')) {
    console.log('Not found calculator');
    res.statusCode = 404;
    res.end(
      `
       <h1>Bad Request</h1>
        <p>Query string must contain two numbers</p>
      `
    );
    return;
  }

  const values: number[] = [];

  req.url
    .split('?')[1]
    .split('&')
    .forEach((pair) => {
      const [_key, value] = pair.split('=');
      values.push(Number(value));
    });

  console.log('values', values);

  if (values.length !== 2 || values.some(isNaN)) {
    res.statusCode = 404;
    res.end(`
        <h1>Bad Request</h1>
        <p>Query string must contain two numbers</p>
      `);
    return;
  }

  console.log('Fin');
};
