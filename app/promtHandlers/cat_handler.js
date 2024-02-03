import {createReadStream} from 'node:fs';
import {pipeline} from 'node:stream/promises';
import {getPathes, myError} from '../../utils/utils.js';
import {stdout} from 'node:process';

export default async function cat_handler(params, curDir) {
	const {path_to_source: filePATH} = getPathes(params, curDir);

	try {
		await pipeline(
			createReadStream(filePATH),
			stdout,
			{end: false},
		);
	} catch {
		myError();
	}
}
