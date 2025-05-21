// copy-static.mjs
import { copyFileSync } from 'fs';
import { mkdirSync } from 'fs';
import { existsSync } from 'fs';

// Asegurarse que dist/ existe
if (!existsSync('dist')) {
  mkdirSync('dist');
}

copyFileSync('static.json', 'dist/static.json');