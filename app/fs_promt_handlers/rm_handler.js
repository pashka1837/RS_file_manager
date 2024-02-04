import {rm} from 'node:fs/promises';

import {getPathes, myError} from '../utils/utils.js';

export default async function rm_handler(params, curDir) {
	const {path_to_source} = getPathes(params, curDir);
	try {
		await rm(path_to_source);
	} catch {
		myError();
	}
}
