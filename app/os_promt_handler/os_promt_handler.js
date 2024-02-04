import {homedir, cpus, userInfo, machine, EOL} from 'node:os';
export default function os_promt_handler(params) {
	function getCPUS() {
		return cpus().map(c => ({model: c.model, speed: c.speed}));
	}

	switch ((params).toLowerCase()) {
		case ('--eol'):
			console.log(EOL);
			break;
		case ('--cpus'):
			console.table(getCPUS());
			break;
		case ('--homedir'):
			console.log(homedir());
			break;
		case ('--username'):
			console.log(userInfo().username);
			break;
		case ('--architecture'):
			console.log(machine());
			break;
		default:
			console.log('Invalid input');
	}
}
