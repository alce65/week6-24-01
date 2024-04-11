import { readFileSync, readFile, writeFileSync, writeFile } from 'fs';

// Synchronous read & write

export const makeSync = () => {
  const fileDataSync = readFileSync('data.txt', { encoding: 'utf-8' });
  console.log(fileDataSync);

  const data = 'Hello, world!';
  writeFileSync('output.txt', data);

  const fileWriteDataSync = readFileSync('output.txt', { encoding: 'utf-8' });
  console.log('Write file', fileWriteDataSync);
};
// Asynchronous read & write

export const readAsync = () => {
  readFile('data.txt', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      console.error(err.message);
      return;
    }

    console.log('Async read', data);
  });
};

export const writeAsync = () => {
  writeFile('output2.txt', 'Nuevo texto', (err) => {
    if (err) {
      console.error(err.message);
      return;
    }

    console.log('File written');
    readFile('output2.txt', { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        console.error(err.message);
        return;
      }

      console.log('Async read after write', data);
    });
  });
};

// MakeSync();
// ReadAsync();

writeAsync();
