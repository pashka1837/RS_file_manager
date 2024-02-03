import {opendir} from 'node:fs/promises';
import {getPathes, myError} from '../../utils/utils.js';
export default async function cd_hadnler(params, curDir) {
	const {path_to_source} = getPathes(params, curDir);

	try {
		const dir = await opendir(path_to_source);
		await dir.close();
		return path_to_source;
	} catch {
		myError();
		return curDir;
	}
}
