import {createReadStream, createWriteStream} from 'node:fs';
import {pipeline} from 'node:stream/promises';
import {createBrotliDecompress} from 'node:zlib';
import {getPathes, myError} from '../utils/utils.js';

export default async function decompress_handler(params, curDir) {
	const {path_to_source, path_to_destination} = getPathes(params, curDir);
	try {
		await pipeline(
			createReadStream(path_to_source),
			createBrotliDecompress(),
			createWriteStream(path_to_destination),
		);
	} catch {
		myError();
	}
}
