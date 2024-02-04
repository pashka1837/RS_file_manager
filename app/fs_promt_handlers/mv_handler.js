
import cp_handler from './cp_handler.js';
import rm_handler from './rm_handler.js';

export default async function mv_handler(params, curDir) {
	await cp_handler(params, curDir);
	await rm_handler(params, curDir);
}
