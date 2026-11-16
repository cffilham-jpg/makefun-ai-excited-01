import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const sourceImage = resolve(dirname(fileURLToPath(import.meta.url)), 'entry.png');
const outputDirectory = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');

mkdirSync(outputDirectory, { recursive: true });
copyFileSync(sourceImage, resolve(outputDirectory, 'entry.png'));
