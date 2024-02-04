import {
	cd_handler, ls_handler,
	cat_handler, add_hadnler,
	rn_handler, cp_handler,
	mv_handler, rm_handler} from './fs_promt_handlers/index.js';
import hash_promt_handler from './hash_promt_handler/hash_promt_handler.js';
import os_promt_handler from './os_promt_handler/os_promt_handler.js';
import {compress_handler, decompress_handler} from './zip_promt_handlers/index.js';

export default async function comand_handler(curDir, command, params) {
	let returnDir = curDir;

	switch (command) {
		/* FS commands */
		case ('cd'):
			returnDir = await cd_handler(params, curDir);
			break;
		case ('up'):
			returnDir = await cd_handler('../', curDir);
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
		case ('cp'):
			await cp_handler(params, curDir);
			break;
		case ('mv'):
			await mv_handler(params, curDir);
			break;
		case ('rm'):
			await rm_handler(params, curDir);
			break;
		/* OS commands */
		case ('os'):
			os_promt_handler(params);
			break;
		/* HASH command */
		case ('hash'):
			await hash_promt_handler(params, curDir);
			break;
			/* ZIP commands */
		case ('compress'):
			await compress_handler(params, curDir);
			break;
		case ('decompress'):
			await decompress_handler(params, curDir);
			break;
		default:
			console.log('Invalid input');
	}

	return returnDir;
}
