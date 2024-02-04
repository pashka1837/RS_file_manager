import {createReadStream} from 'node:fs';
import {createHash} from 'node:crypto';
import {stdout} from 'node:process';
import {pipeline} from 'node:stream/promises';
import {getPathes, myError} from '../utils/utils.js';

export default async function hash_promt_handler(params, curDir) {
	const {path_to_source} = getPathes(params, curDir);

	try {
		await pipeline(
			createReadStream(path_to_source),
			createHash('sha256').setEncoding('hex'),
			stdout,
			{end: false},
		);
		console.log('');
	} catch {
		myError();
	}
}
