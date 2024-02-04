import {createReadStream, createWriteStream} from 'node:fs';
import {join} from 'node:path';
import {access} from 'node:fs/promises';
import {getPathes, myError} from '../utils/utils.js';
import {pipeline} from 'node:stream/promises';

export default async function cp_handler(params, curDir) {
	const {path_to_source, path_to_destination} = getPathes(params, curDir);
	const file_name = path_to_source.split(('\\')).splice(-2).join('\\');
	const new_path_to_dest = join(path_to_destination, file_name);

	try {
		await access(new_path_to_dest);
		// Checking if file with new name is exist,
		// cause if it does, createWriteStream will r over write existing one
		myError(', file with this name is already exists.');
	} catch {
		try {
			await access(path_to_source);
			await pipeline(
				createReadStream(path_to_source),
				createWriteStream(new_path_to_dest),
			);
		} catch {
			myError();
		}
	}
}
