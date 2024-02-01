
import {argv, stdin, stdout} from 'node:process';
import {createInterface} from 'node:readline/promises';
import {getRoot} from '../utils/utils.js';
import {handleLine} from './handleLine.js';

const rootDir = getRoot();
let curDir = rootDir;

const rl = createInterface({input: stdin,
	output: stdout});

function main() {
	const userName = argv.slice(2).at(0)?.split('=').at(1) || 'Anon';

	console.log(`Welcome to the File Manager, ${userName}!`);
	console.log(` You are currently in ${curDir}`);

	process.on('exit', () => console.log(`Thank you for using File Manager, ${userName}, goodbye!`));

	rl.on('line', async d => {
		curDir = await handleLine(d, curDir);
		console.log(` You are currently in ${curDir}`);
	});
}

main();

// Await main();

// Process.on('exit', () => console.log('Thank you for using File Manager, , goodbye!'));

// 	Console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
// }

