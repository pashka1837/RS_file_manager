
import {argv, stdin, stdout} from 'node:process';
import {createInterface} from 'node:readline/promises';
import {getRoot} from '../utils/utils.js';
import {handleLine} from './handleLine.js';

let curDir = 'C:/Users/pashk/Documents/Web_Development/Edu/RSschool/nodeJs_2024/file_manager';
// GetRoot();

const rl = createInterface({input: stdin, output: stdout});

async function main() {
	const userName = argv.slice(2).at(0)?.split('=').at(1) || 'Anon';

	console.log(`Welcome to the File Manager, ${userName}!`);
	console.log(` You are currently in ${curDir}`);

	process.on('exit', () => console.log(`Thank you for using File Manager, ${userName}, goodbye!`));

	for await (const line of rl) {
		if (line === '.exit') {
			process.exit(0);
		}

		curDir = await handleLine(line, curDir);
		console.log(` You are currently in ${curDir}`);
	}
}

await main();

