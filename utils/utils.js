import {platform} from 'node:os';
import {parse} from 'node:path';
import {cwd} from 'node:process';

export function getRoot() {
	if (platform() === 'win32') {
		return parse(cwd()).root.toLowerCase();
	}

	return '/';
}

export function getCommand(line) {
	return line.split(' ').at(0);
}
