import {getCommand, getParams} from './utils/utils.js';
import comand_handler from './comand_handler.js';

export async function line_handler(line, curDir) {
	const command = getCommand(line);
	const params = getParams(line);

	const returnDir = await comand_handler(curDir, command, params);

	return returnDir;
}
