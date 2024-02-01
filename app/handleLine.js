import {getCommand} from '../utils/utils.js';
import {cd_hadnler} from './promtHandlers/cd_hadnler.js';

export async function handleLine(line, curDir) {
	let returnDir = curDir;
	const command = getCommand(line);
	switch (command) {
		case ('cd'): returnDir = await cd_hadnler(line, curDir);
			break;
		case ('up'): returnDir = await cd_hadnler('cd ../', curDir);
			break;
		default: console.log('Invalid input');
	}

	return returnDir;
}
