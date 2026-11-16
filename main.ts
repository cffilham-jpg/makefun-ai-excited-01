// Copy the bundled entry image into the requested output directory,
// creating that directory when needed.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const source = resolve(dirname(fileURLToPath(import.meta.url)), 'entry.png');
const outputDirectory = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
mkdirSync(outputDirectory, { recursive: true });
copyFileSync(source, resolve(outputDirectory, 'entry.png'));
