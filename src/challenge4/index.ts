import { createServer } from 'http';
import 'dotenv/config';
import { app } from './app.js';

const port = process.env.PORT ?? 3000;
const server = createServer(app);
server.listen(port, () => {
  console.log(`Server Challenge 4 is running on port ${port}`);
});
