import {appendFile, access} from 'node:fs/promises';
import {getPathes, myError} from '../utils/utils.js';

export default async function add_hadnler(params, curDir) {
	const {path_to_source: filePATH} = getPathes(params, curDir);
	console.log(filePATH);

	try {
		await access(filePATH);
		myError(', file with this name is already exists.');
	} catch {
		try {
			await appendFile(filePATH, '');
		} catch {
			myError();
		}
	}
}
