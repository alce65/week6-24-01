import { readFile, writeFile } from 'fs/promises';

export const makeAsync = () => {
  readFile('data.txt', { encoding: 'utf-8' })
    .then((data) => {
      console.log('Promise read', data);
    })
    .catch((err) => {
      console.error(err.message);
    });
};

export const makeAsync2 = async () => {
  try {
    const data = await readFile('data.txt', { encoding: 'utf-8' });
    console.log('Promise read', data);
  } catch (error) {
    console.error((error as Error).message);
  }
};

export const makeAsync3 = () => {
  writeFile('output3.txt', 'Nuevo texto')
    // eslint-disable-next-line arrow-body-style
    .then(async () => {
      return readFile('output3.txt', { encoding: 'utf-8' });
    })
    .then((data) => {
      console.log('Promise read after write', data);
    })
    .catch((err: NodeJS.ErrnoException) => {
      console.error(err.message);
    });
};

export const makeAsync4 = async () => {
  try {
    await writeFile('output3.txt', 'Nuevo texto');
    const data = await readFile('output3.txt', { encoding: 'utf-8' });
    console.log('Promise read after write', data);
  } catch (error) {
    console.error((error as NodeJS.ErrnoException).message);
  }
};

await makeAsync4();
