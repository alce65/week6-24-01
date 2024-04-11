import { readFile } from 'fs/promises';

export const readJson = async (source: string) => {
  try {
    const data = await readFile(source, { encoding: 'utf-8' });
    return JSON.parse(data) as Record<string, unknown>;
  } catch (error) {
    console.error((error as NodeJS.ErrnoException).message);
  }
};

console.log(await readJson('db.json'));
