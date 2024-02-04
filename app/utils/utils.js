import {platform} from 'node:os';
import {normalize, parse, join} from 'node:path';
import {cwd} from 'node:process';

export function getRoot() {
	if (platform() === 'win32') {
		return parse(cwd()).root.toLowerCase();
	}

	return '/';
}

export function getCommand(line) {
	return (line.split(' ').at(0)).toLowerCase();
}

export function getParams(line) {
	return line.split(' ').splice(1).join(' ');
}

/* PATH */

export function getPathes(params, curDir) {
	function replcerFN1(match) {
		return match.split(' ').join('_');
	}

	function replcerFN2(match) {
		return match.replace(/"/g, '/').split('_').join(' ');
	}

	const newParams = params
		.replace(/"(.*?)"/g, replcerFN1)
		.split(' ')
		.filter(p => p !== '')
		.map(param => {
			let thisPATH = (normalize(param
				.replace(/"(.*?)"/g, replcerFN2) + '\\')).toLowerCase();
			if (!isMyAbsolute(thisPATH)) {
				thisPATH = join(curDir, thisPATH).toLowerCase();
			}

			return thisPATH;
		});

	return {
		path_to_source: newParams[0],
		path_to_destination: newParams[1] || null,
	};
}

export function isMyAbsolute(somePath) {
	if (somePath.includes(getRoot())) {
		return true;
	}

	return false;
}

/* PATH */

export function myError(error = '') {
	console.log(`Invalid input${error}`);
}
