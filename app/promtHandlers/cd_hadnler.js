import {access} from 'node:fs/promises';
import {getRoot} from '../../utils/utils.js';
import {isAbsolute, join, normalize} from 'node:path';

export async function cd_hadnler(line, curDir) {
	let toPATH = normalize(line.split(' ').at(1));

	if (!isAbsolute(toPATH)) {
		toPATH = join(curDir, toPATH);
	}

	if (!toPATH.includes(getRoot())) {
		console.log('Invalid input');
		return curDir;
	}

	try {
		await access(toPATH);
		return toPATH;
	} catch {
		console.log('Invalid input');
		return curDir;
	}
}
