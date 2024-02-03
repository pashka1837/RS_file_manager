import {getCommand, getParams} from '../utils/utils.js';
import {cd_handler, ls_handler, cat_handler, add_hadnler, rn_handler} from './promtHandlers/index.js';

export async function handleLine(line, curDir) {
	let returnDir = curDir;
	const command = getCommand(line);
	const params = getParams(line);
	switch (command) {
		case ('cd'):
			returnDir = await cd_handler(params, curDir);
			break;
		case ('up'): returnDir = await cd_handler('../', curDir);
			break;
		case ('ls'): await ls_handler(curDir);
			break;
		case ('cat'):
			await cat_handler(params, curDir);
			break;
		case ('add'):
			await add_hadnler(params, curDir);
			break;
		case ('rn'):
			await rn_handler(params, curDir);
			break;
		default: console.log('Invalid input');
	}

	return returnDir;
}
