import {join} from 'node:path';
import {getPathes, myError} from '../utils/utils.js';
import {rename, access} from 'node:fs/promises';

export default async function rn_handler(params, curDir) {
	const {path_to_source, path_to_destination} = getPathes(params, curDir);
	const folder_path = path_to_source.split('\\').slice(0, -2).join('\\');

	const file_name = path_to_destination.split(('\\')).splice(-2).join('\\');
	const new_path = join(folder_path, file_name);
	try {
		await access(new_path);
		// Checking if file with new name is exist,
		// cause if it does, rename will  over write a new one for some reason
		myError(', file with this name is already exists.');
	} catch {
		try {
			await rename(path_to_source, new_path);
		} catch {
			myError();
		}
	}
}
