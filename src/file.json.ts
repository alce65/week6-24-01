import { readFile } from 'fs/promises';

interface ErrnoException extends Error {
  errno?: number | undefined;
  code?: string | undefined;
  path?: string | undefined;
  syscall?: string | undefined;
}

export const readJSON = async (source: string) => {
  try {
    const data = await readFile(source, { encoding: 'utf-8' });
    return JSON.parse(data);
  } catch (error) {
    console.error((error as ErrnoException).message);
  }
};

console.log(await readJSON('db.json'));
