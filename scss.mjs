import { glob } from 'glob';
import { dirname, join } from 'path';
import { mkdir, writeFile } from 'fs/promises';
import { fullPath, scssFileToESModule } from './web-dev-server.config.mjs';

const [ , , srcDir, destDir] = process.argv;

const src = fullPath(srcDir);
const dest = fullPath(destDir);
const files = await glob('**/*.scss', { cwd: src });

for (const scssFile of files) {
	const esm = scssFileToESModule(join('src', scssFile));
	const path = join(dest, `${ scssFile }.ts`);
	const dir = dirname(path);

	await mkdir(dir, { recursive: true });
	await writeFile(path, esm, { encoding: 'utf8' });
}
