import {opendir} from 'node:fs/promises';
import {myError} from '../../utils/utils.js';

function mySort(a, b) {
	return a.Name.localeCompare(b.Name);
}

export default async function ls_handler(curDir) {
	try {
		const folders = [];
		const files = [];
		const dir = await opendir(curDir);
		for await (const dirent of dir) {
			if (dirent.isDirectory()) {
				folders.push({Name: dirent.name, Type: 'directory'});
			} else {
				files.push({Name: dirent.name, Type: 'files'});
			}
		}

		console.table([...folders.sort(mySort), ...files.sort(mySort)]);
	} catch {
		myError();
	}
}
