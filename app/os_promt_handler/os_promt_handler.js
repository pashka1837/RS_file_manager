import {homedir, cpus, hostname, machine} from 'node:os';
export default function os_promt_handler(params) {
	function getCPUS() {
		return cpus().map(c => ({model: c.model, speed: c.speed}));
	}

	switch (params) {
		case ('--EOL'):
			console.log('\n');
			break;
		case ('--cpus'):
			console.table(getCPUS());
			break;
		case ('--homedir'):
			console.log(homedir());
			break;
		case ('--username'):
			console.log(hostname());
			break;
		case ('--architecture'):
			console.log(machine());
			break;
		default:
			console.log('Invalid input');
	}
}
