
import {argv, stdin, stdout} from 'node:process';
import {homedir} from 'node:os';
import {createInterface} from 'node:readline/promises';
import {line_handler} from './line_handler.js';

const rl = createInterface({input: stdin, output: stdout});

async function main() {
	const userName = argv.slice(2).at(0)?.split('=').at(1) || 'Anon';
	let curDir = homedir();

	console.log(`Welcome to the File Manager, ${userName}!`);
	console.log(` You are currently in ${curDir}`);

	process.on('exit', () => console.log(`Thank you for using File Manager, ${userName}, goodbye!`));

	for await (const line of rl) {
		if (line === '.exit') {
			process.exit(0);
		}

		try {
			curDir = await line_handler(line.trim(), curDir);
		} catch {
			console.log('Something went wrong');
		} finally {
			console.log(` You are currently in ${curDir}`);
		}
	}
}

await main();

