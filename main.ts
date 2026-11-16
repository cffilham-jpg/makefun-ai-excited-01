// Copy the adjacent entry image into the configured output folder,
// creating that folder when needed.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const source = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDirectory, { recursive: true });
copyFileSync(source, join(outputDirectory, 'entry.png'));
